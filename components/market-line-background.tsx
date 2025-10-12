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

export default function MarketLineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame = 0
    const points: number[] = []
    const config = {
      pointCount: 180,
      minStep: -0.22,
      maxStep: 0.28,
      baselineRatio: 0.52,
      amplitudeRatio: 0.22,
      velocityDecay: 0.972,
      maxVelocity: 0.12,
      noiseStrength: 0.06,
      reversionStrength: 0.38,
      updateInterval: 520,
      headSpeedDivisor: 260,
    }
    let velocity = 0
    let lastUpdate = 0
    let cyclePhase = 0

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const initPoints = () => {
      points.length = 0
      const { height } = canvas.getBoundingClientRect()
      const baseline = height * config.baselineRatio
      const amplitude = height * config.amplitudeRatio

      let current = baseline
      for (let i = 0; i < config.pointCount; i++) {
        current += (Math.random() - 0.5) * amplitude * 0.12
        current = clamp(current, baseline - amplitude, baseline + amplitude)
        points.push(current)
      }
    }

    const updatePoints = (time: number) => {
      const { height } = canvas.getBoundingClientRect()
      const baseline = height * config.baselineRatio
      const amplitude = height * config.amplitudeRatio
      const trendBias = Math.sin(time / 6800) * 0.015
      const last = points[points.length - 1] ?? baseline

      const noise = (Math.random() - 0.5) * config.noiseStrength
      const deviation = (baseline - last) / (amplitude || 1)
      const reversion = deviation * config.reversionStrength

      const cycle = cyclePhase % 4
      let directionalBias = 0
      if (cycle === 0) {
        directionalBias = 0.06
      } else if (cycle === 1) {
        directionalBias = -0.04
      } else if (cycle === 2) {
        directionalBias = 0.02
      } else {
        directionalBias = -0.05
      }
      cyclePhase += 1

      velocity = velocity * config.velocityDecay + noise + trendBias + reversion + directionalBias * 0.045
      if (Math.abs(velocity) < 0.004) {
        velocity += Math.random() > 0.5 ? 0.005 : -0.005
      }
      velocity = clamp(velocity, -config.maxVelocity, config.maxVelocity)

      let nextValue = last + velocity * amplitude
      const maxDeviation = amplitude * 0.75
      nextValue = clamp(nextValue, baseline - maxDeviation, baseline + maxDeviation)

      points.push(nextValue)
      points.shift()
    }

    const drawGrid = (width: number, height: number, time: number) => {
      ctx.save()
      ctx.globalAlpha = 0.55

      const verticalSpacing = Math.max(width / 12, 140)
      ctx.strokeStyle = "rgba(255,255,255,0.05)"
      ctx.lineWidth = 1
      for (let x = (time / 18) % verticalSpacing; x < width; x += verticalSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      const horizontalSpacing = height / 6
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
      const progress = ((time / config.headSpeedDivisor) % (points.length - 1))
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

      ctx.globalCompositeOperation = "lighter"
      ctx.fillStyle = "rgba(246,212,125,0.08)"
      ctx.fillRect(0, 0, width, height)
      ctx.restore()
    }

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      const time = performance.now()

      drawGlow(width, height)
      drawGrid(width, height, time)
      drawLine(width, time)
      drawHead(width, time)

      if (time - lastUpdate >= config.updateInterval) {
        updatePoints(time)
        lastUpdate = time
      }
      animationFrame = requestAnimationFrame(render)
    }

    const handleResize = () => {
      resize()
      initPoints()
    }

    resize()
    initPoints()
    animationFrame = requestAnimationFrame(render)

    let resizeObserver: ResizeObserver | null = null
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(canvas)
    } else {
      window.addEventListener("resize", handleResize)
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener("resize", handleResize)
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
