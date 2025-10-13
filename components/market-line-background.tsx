"use client"

import { useEffect, useRef } from "react"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const rgba = (values: string, alpha: number) => `rgba(${values}, ${alpha})`

const COLORS = {
  up: {
    rgb: "52, 211, 153",
    glow: "rgba(52, 211, 153, 0.45)",
    trail: "rgba(16, 185, 129, 0.25)",
  },
  down: {
    rgb: "248, 113, 113",
    glow: "rgba(248, 113, 113, 0.4)",
    trail: "rgba(220, 38, 38, 0.22)",
  },
}

type LineEnvironment = {
  prefersReducedMotion: boolean
  isMobile: boolean
}

type LineConfig = {
  pointCount: number
  baselineRatio: number
  amplitudeRatio: number
  updateInterval: number
  headSpeedDivisor: number
  patternBounds: readonly [readonly [number, number], ...readonly [number, number][]]
}

const PATTERN_BOUNDS = [
  [0.42, 0.58],
  [-0.3, -0.08],
  [0.22, 0.36],
  [-0.64, -0.42],
  [0.14, 0.3],
  [-0.34, -0.14],
] as const

const createConfig = (env: LineEnvironment): LineConfig => {
  const densityScale = env.prefersReducedMotion ? 0.38 : env.isMobile ? 0.62 : 1
  const amplitudeScale = env.prefersReducedMotion ? 0.6 : env.isMobile ? 0.82 : 1

  return {
    pointCount: Math.max(160, Math.floor(420 * densityScale)),
    baselineRatio: 0.52,
    amplitudeRatio: 0.22 * amplitudeScale,
    updateInterval: env.prefersReducedMotion ? 120 : env.isMobile ? 90 : 70,
    headSpeedDivisor: env.prefersReducedMotion ? 140 : env.isMobile ? 110 : 90,
    patternBounds: PATTERN_BOUNDS,
  }
}

export default function MarketLineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const getEnvironment = (): LineEnvironment => ({
      prefersReducedMotion: motionQuery.matches,
      isMobile: window.innerWidth < 768,
    })

    let env = getEnvironment()
    let config = createConfig(env)
    let animationFrame = 0
    const points: number[] = []
    const pickWithinBounds = (range: readonly [number, number]) => range[0] + Math.random() * (range[1] - range[0])

    let lastUpdate = 0
    let segmentIndex = 0
    const segment = {
      start: 0,
      startNormalized: 0,
      targetNormalized: pickWithinBounds(config.patternBounds[0]),
      duration: 1100,
      elapsed: 0,
    }

    const syncEnvironment = () => {
      env = getEnvironment()
      config = createConfig(env)
    }

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dprCap = env.prefersReducedMotion ? 1.5 : env.isMobile ? 1.75 : 2.5
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const resetSegment = (baseline: number, amplitude: number) => {
      segmentIndex = 0
      segment.start = baseline
      segment.startNormalized = 0
      segment.targetNormalized = pickWithinBounds(config.patternBounds[0])
      segment.duration = 2600
      segment.elapsed = 0
    }

    const computeNextValue = (baseline: number, amplitude: number, dt: number) => {
      if (segment.elapsed === 0 && points.length > 0) {
        segment.start = points[points.length - 1]
        segment.startNormalized = clamp((segment.start - baseline) / (amplitude || 1), -0.7, 0.7)
      }

      segment.elapsed += dt
      const target = baseline + amplitude * segment.targetNormalized
      const startValue = segment.start
      const progress = clamp(segment.elapsed / segment.duration, 0, 1)
      const eased = 1 - Math.pow(1 - progress, 2)
      let value = startValue + (target - startValue) * eased
      value += (Math.random() - 0.5) * amplitude * 0.009
      value = clamp(value, baseline - amplitude * 0.72, baseline + amplitude * 0.72)

      if (progress >= 1) {
        segment.start = value
        segment.startNormalized = clamp((segment.start - baseline) / (amplitude || 1), -0.7, 0.7)
        segmentIndex = (segmentIndex + 1) % config.patternBounds.length
        const range = config.patternBounds[segmentIndex]
        const nextNormalized = pickWithinBounds(range)
        segment.targetNormalized = clamp(nextNormalized, -0.68, 0.68)
        segment.duration = 750 + Math.random() * 1100
        segment.elapsed = 0
      }

      return value
    }

    const initPoints = () => {
      points.length = 0
      const { height } = canvas.getBoundingClientRect()
      const baseline = height * config.baselineRatio
      const amplitude = height * config.amplitudeRatio
      resetSegment(baseline, amplitude)

      for (let i = 0; i < config.pointCount; i++) {
        const value = computeNextValue(baseline, amplitude, config.updateInterval)
        points.push(value)
      }
    }

    const updatePoints = (time: number) => {
      const { height } = canvas.getBoundingClientRect()
      const baseline = height * config.baselineRatio
      const amplitude = height * config.amplitudeRatio
      const dt = lastUpdate ? Math.min(time - lastUpdate, config.updateInterval * 1.5) : config.updateInterval

      const nextValue = computeNextValue(baseline, amplitude, dt)
      points.push(nextValue)
      points.shift()
      lastUpdate = time
    }

    const drawGrid = (width: number, height: number, time: number) => {
      ctx.save()
      ctx.globalAlpha = env.isMobile ? 0.35 : 0.55

      const verticalSpacing = env.isMobile ? Math.max(width / 3, 160) : Math.max(width / 12, 140)
      ctx.strokeStyle = "rgba(255,255,255,0.05)"
      ctx.lineWidth = 1
      for (let x = (time / 18) % verticalSpacing; x < width; x += verticalSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      const horizontalSpacing = env.isMobile ? height / 4 : height / 6
      ctx.strokeStyle = "rgba(150,116,255,0.05)"
      for (let y = horizontalSpacing; y < height; y += horizontalSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      ctx.restore()
    }

    const drawLine = (width: number, time: number) => {
      const slice = width / (points.length - 1)
      const referenceTime = env.prefersReducedMotion ? lastUpdate : time
      const progress = ((referenceTime / config.headSpeedDivisor) % (points.length - 1))
      const progressIndex = Math.floor(progress)
      const partial = progress - progressIndex

      ctx.lineWidth = 1.6
      ctx.lineJoin = "round"
      ctx.lineCap = "round"
      ctx.shadowColor = "transparent"

      for (let i = 0; i < progressIndex; i++) {
        const x = i * slice
        const nextX = (i + 1) * slice
        const y = points[i]
        const nextY = points[i + 1]
        const isUp = nextY < y

        ctx.beginPath()
        ctx.strokeStyle = isUp ? rgba(COLORS.up.rgb, 0.32) : rgba(COLORS.down.rgb, 0.3)
        ctx.moveTo(x, y)
        ctx.lineTo(nextX, nextY)
        ctx.stroke()
      }

      if (progressIndex < points.length - 1) {
        const startX = progressIndex * slice
        const startY = points[progressIndex]
        const nextY = points[progressIndex + 1]
        const endX = startX + partial * slice
        const endY = startY + (nextY - startY) * partial
        const isUp = nextY < startY

        ctx.beginPath()
        ctx.strokeStyle = isUp ? rgba(COLORS.up.rgb, 0.34) : rgba(COLORS.down.rgb, 0.32)
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

      const highlightSpan = 14
      ctx.lineWidth = 2.6
      ctx.shadowBlur = 18

      const start = Math.max(0, progressIndex - highlightSpan)

      for (let i = start; i < progressIndex; i++) {
        const x = i * slice
        const nextX = (i + 1) * slice
        const y = points[i]
        const nextY = points[i + 1]
        const isUp = nextY < y
        const intensity = clamp(1 - (progressIndex - i) / highlightSpan, 0.12, 1)

        ctx.beginPath()
        ctx.strokeStyle = isUp
          ? rgba(COLORS.up.rgb, 0.35 + intensity * 0.6)
          : rgba(COLORS.down.rgb, 0.35 + intensity * 0.55)
        ctx.shadowColor = isUp ? COLORS.up.glow : COLORS.down.glow
        ctx.moveTo(x, y)
        ctx.lineTo(nextX, nextY)
        ctx.stroke()
      }

      if (progressIndex < points.length - 1) {
        const startX = progressIndex * slice
        const startY = points[progressIndex]
        const nextY = points[progressIndex + 1]
        const endX = startX + partial * slice
        const endY = startY + (nextY - startY) * partial
        const isUp = nextY < startY
        const intensity = clamp(partial + 0.2, 0.2, 1)

        ctx.beginPath()
        ctx.strokeStyle = isUp
          ? rgba(COLORS.up.rgb, 0.4 + intensity * 0.55)
          : rgba(COLORS.down.rgb, 0.38 + intensity * 0.5)
        ctx.shadowColor = isUp ? COLORS.up.glow : COLORS.down.glow
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

      ctx.shadowBlur = 0
    }

    const drawHead = (width: number, time: number) => {
      const slice = width / (points.length - 1)
      const progress = ((time / config.headSpeedDivisor) % (points.length - 1))
      const baseIndex = Math.min(Math.floor(progress), points.length - 2)
      const t = progress - baseIndex
      const x = baseIndex * slice + t * slice
      const currentY = points[baseIndex]
      const nextY = points[baseIndex + 1]
      const y = currentY + (nextY - currentY) * t
      const isUp = nextY < currentY
      const palette = isUp ? COLORS.up : COLORS.down
      const pulse = 5.4 + Math.sin(time / 180) * 1.4

      ctx.save()
      ctx.globalCompositeOperation = "lighter"
      ctx.shadowColor = palette.glow
      ctx.shadowBlur = 26

      ctx.beginPath()
      ctx.arc(x, y, pulse, 0, Math.PI * 2)
      ctx.fillStyle = rgba(palette.rgb, 0.92)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(x, y, pulse + 3 + Math.sin(time / 320) * 1.2, 0, Math.PI * 2)
      ctx.strokeStyle = rgba(palette.rgb, 0.35)
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.shadowBlur = 18
      ctx.beginPath()
      ctx.arc(x, y, pulse + 9, 0, Math.PI * 2)
      ctx.strokeStyle = isUp ? COLORS.up.trail : COLORS.down.trail
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.restore()
    }

    const drawGlow = (width: number, height: number) => {
      ctx.save()
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "rgba(246,212,125,0.08)")
      gradient.addColorStop(0.5, "rgba(20,15,30,0.22)")
      gradient.addColorStop(1, "rgba(2,2,6,0.75)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      if (!env.isMobile && !env.prefersReducedMotion) {
        ctx.globalCompositeOperation = "lighter"
        ctx.fillStyle = "rgba(246,212,125,0.08)"
        ctx.fillRect(0, 0, width, height)
      }
      ctx.restore()
    }

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      const time = performance.now()

      drawGlow(width, height)
      drawGrid(width, height, time)
      drawLine(width, time)
      if (!env.prefersReducedMotion && !env.isMobile) {
        drawHead(width, time)
      }

      if (!env.prefersReducedMotion && time - lastUpdate >= config.updateInterval) {
        updatePoints(time)
        lastUpdate = time
      }

      if (!env.prefersReducedMotion) {
        animationFrame = requestAnimationFrame(render)
      }
    }

    const handleEnvironmentChange = () => {
      cancelAnimationFrame(animationFrame)
      syncEnvironment()
      resize()
      initPoints()
      lastUpdate = performance.now()
      render()
    }

    handleEnvironmentChange()

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleEnvironmentChange)
      resizeObserver.observe(canvas)
    } else {
      window.addEventListener("resize", handleEnvironmentChange)
    }

    const handleMotionPreferenceChange = () => {
      handleEnvironmentChange()
    }

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionPreferenceChange)
    } else {
      motionQuery.addListener(handleMotionPreferenceChange)
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener("resize", handleEnvironmentChange)
      }
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionPreferenceChange)
      } else {
        motionQuery.removeListener(handleMotionPreferenceChange)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent,_rgba(2,2,6,0.5))]" />
    </div>
  )
}
