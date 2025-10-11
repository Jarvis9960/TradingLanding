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

const LAYERS: LayerConfig[] = [
  {
    count: 45,
    size: [0.4, 1.1],
    speedY: [0.05, 0.18],
    speedX: [-0.05, 0.05],
    opacity: [0.25, 0.4],
    blur: 3,
    parallax: 0.05,
    pointer: 0.006,
  },
  {
    count: 60,
    size: [0.9, 1.8],
    speedY: [0.08, 0.24],
    speedX: [-0.08, 0.08],
    opacity: [0.25, 0.45],
    blur: 1.5,
    parallax: 0.12,
    pointer: 0.01,
  },
  {
    count: 70,
    size: [1.2, 2.6],
    speedY: [0.12, 0.32],
    speedX: [-0.12, 0.12],
    opacity: [0.35, 0.6],
    blur: 0.4,
    parallax: 0.18,
    pointer: 0.014,
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

    let particles: Particle[] = []
    let animationFrameId: number
    let width = 0
    let height = 0

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    }

    const scroll = { value: window.scrollY }

    const createParticles = () => {
      particles = []
      LAYERS.forEach((layer) => {
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

      const ratio = window.devicePixelRatio || 1
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

      createParticles()
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointer.targetX = event.clientX
      pointer.targetY = event.clientY
    }

    const handlePointerLeave = () => {
      pointer.targetX = width / 2
      pointer.targetY = height / 2
    }

    const handleScroll = () => {
      scroll.value = window.scrollY
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      pointer.x += (pointer.targetX - pointer.x) * 0.08
      pointer.y += (pointer.targetY - pointer.y) * 0.08

      ctx.fillStyle = "rgba(3, 7, 18, 0.08)"
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

        if (particle.y + parallaxOffset < -20) {
          particle.y = height + 20 - parallaxOffset
          particle.x = Math.random() * width
        }

        if (particle.x < -20 || particle.x > width + 20) {
          particle.x = particle.x < 0 ? width + 20 : -20
        }
      })
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerleave", handlePointerLeave)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }}
    />
  )
}
