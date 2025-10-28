"use client"

import { useEffect, useRef } from "react"

type LayerConfig = {
  count: number
  size: [number, number]
  speedY: [number, number]
  speedX: [number, number]
  opacity: [number, number]
  blur: number
  parallax: number
  pointer: number
}

type Particle = {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  blur: number
  hue: number
  layer: LayerConfig
}

const BASE_LAYERS: LayerConfig[] = [
  {
    count: 22,
    size: [0.6, 1.2],
    speedY: [0.035, 0.12],
    speedX: [-0.035, 0.035],
    opacity: [0.25, 0.38],
    blur: 2.2,
    parallax: 0.04,
    pointer: 0.004,
  },
  {
    count: 28,
    size: [0.9, 1.8],
    speedY: [0.06, 0.18],
    speedX: [-0.06, 0.06],
    opacity: [0.25, 0.42],
    blur: 1.2,
    parallax: 0.09,
    pointer: 0.008,
  },
  {
    count: 32,
    size: [1.2, 2.2],
    speedY: [0.09, 0.24],
    speedX: [-0.09, 0.09],
    opacity: [0.32, 0.55],
    blur: 0.4,
    parallax: 0.12,
    pointer: 0.01,
  },
]

const randomInRange = ([min, max]: [number, number]) => Math.random() * (max - min) + min

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    let particles: Particle[] = []
    let animationFrameId: number
    let lastFrameTime = 0
    const FRAME_INTERVAL = 1000 / 30
    let width = 0
    let height = 0
    let activeLayers: LayerConfig[] = []

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    }

    const scroll = { value: window.scrollY }

    const computeEnvironment = () => {
      const prefersReducedMotion = motionQuery.matches
      const currentWidth = window.innerWidth
      const isMobile = currentWidth < 768

      if (prefersReducedMotion) {
        return {
          shouldAnimate: false,
          layers: [] as LayerConfig[],
          enablePointer: false,
        }
      }

      const densityScale = isMobile ? 0.45 : 1
      const speedScale = isMobile ? 0.75 : 1
      const pointerScale = isMobile ? 0.35 : 1

      return {
        shouldAnimate: true,
        layers: BASE_LAYERS.map((layer) => ({
          ...layer,
          count: Math.max(6, Math.floor(layer.count * densityScale)),
          speedY: [layer.speedY[0] * speedScale, layer.speedY[1] * speedScale] as [number, number],
          speedX: [layer.speedX[0] * speedScale, layer.speedX[1] * speedScale] as [number, number],
          pointer: layer.pointer * pointerScale,
          parallax: layer.parallax * speedScale,
          opacity: [
            layer.opacity[0] * (isMobile ? 0.9 : 1),
            layer.opacity[1] * (isMobile ? 0.9 : 1),
          ] as [number, number],
        })),
        enablePointer: !isMobile,
      }
    }

    let enablePointer = true

    const syncEnvironment = () => {
      const env = computeEnvironment()
      enablePointer = env.enablePointer
      activeLayers = env.layers

      if (!env.shouldAnimate) {
        cancelAnimationFrame(animationFrameId)
        ctx.clearRect(0, 0, width, height)
        canvas.style.display = "none"
        particles = []
        return false
      }

      canvas.style.display = ""
      return true
    }

    if (!syncEnvironment()) {
      const handlePreferenceChange = () => syncEnvironment()
      if (motionQuery.addEventListener) {
        motionQuery.addEventListener("change", handlePreferenceChange)
      } else {
        motionQuery.addListener(handlePreferenceChange)
      }
      return () => {
        if (motionQuery.removeEventListener) {
          motionQuery.removeEventListener("change", handlePreferenceChange)
        } else {
          motionQuery.removeListener(handlePreferenceChange)
        }
      }
    }

    const createParticles = () => {
      particles = []
      activeLayers.forEach((layer) => {
        for (let i = 0; i < layer.count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: randomInRange(layer.size),
            speedY: randomInRange(layer.speedY),
            speedX: randomInRange(layer.speedX),
            opacity: randomInRange(layer.opacity),
            blur: layer.blur,
            hue: Math.random() * 360,
            layer,
          })
        }
      })
    }

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      syncEnvironment()

      const ratio = window.devicePixelRatio || 1
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

      createParticles()
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!enablePointer) return
      pointer.targetX = event.clientX
      pointer.targetY = event.clientY
    }

    const handlePointerLeave = () => {
      if (!enablePointer) return
      pointer.targetX = width / 2
      pointer.targetY = height / 2
    }

    const handleScroll = () => {
      scroll.value = window.scrollY
    }

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate)

      const delta = now - lastFrameTime
      if (delta < FRAME_INTERVAL || document.hidden) {
        return
      }
      lastFrameTime = now

      pointer.x += (pointer.targetX - pointer.x) * 0.08
      pointer.y += (pointer.targetY - pointer.y) * 0.08

      ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
      ctx.fillRect(0, 0, width, height)

      particles.forEach((particle) => {
        const parallaxOffset = scroll.value * particle.layer.parallax
        const pointerOffsetX = (pointer.x - width / 2) * particle.layer.pointer
        const pointerOffsetY = (pointer.y - height / 2) * particle.layer.pointer

        const x = particle.x + pointerOffsetX
        const y = particle.y + pointerOffsetY + parallaxOffset

        particle.hue = (particle.hue + 0.3) % 360
        const color = `hsla(${particle.hue}, 80%, 64%, ${particle.opacity})`

        ctx.save()
        ctx.shadowBlur = particle.blur
        ctx.shadowColor = color
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        particle.y -= particle.speedY
        particle.x += particle.speedX + pointerOffsetX * 0.05

        if (particle.y + parallaxOffset < -12) {
          particle.y = height + 12 - parallaxOffset
          particle.x = Math.random() * width
        }

        if (particle.x < -12 || particle.x > width + 12) {
          particle.x = particle.x < 0 ? width + 12 : -12
        }
      })
    }

    resizeCanvas()
    animationFrameId = requestAnimationFrame(animate)

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerleave", handlePointerLeave)
    window.addEventListener("scroll", handleScroll, { passive: true })
    const handlePreferenceChange = () => {
      const shouldAnimate = syncEnvironment()
      if (shouldAnimate) {
        resizeCanvas()
      }
    }
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handlePreferenceChange)
    } else {
      // Safari < 14 fallback
      motionQuery.addListener(handlePreferenceChange)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("scroll", handleScroll)
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handlePreferenceChange)
      } else {
        motionQuery.removeListener(handlePreferenceChange)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.15 }}
    />
  )
}
