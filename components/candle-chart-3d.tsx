"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import type * as THREE from "three"

interface CandleProps {
  position: [number, number, number]
  open: number
  close: number
  high: number
  low: number
  index: number
}

function Candle({ position, open, close, high, low, index }: CandleProps) {
  const meshRef = useRef<THREE.Group>(null)
  const isGreen = close > open
  const bodyHeight = Math.abs(close - open)
  const bodyY = Math.min(open, close) + bodyHeight / 2

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index * 0.3) * 0.08
      meshRef.current.rotation.y = Math.sin(time * 0.3 + index * 0.5) * 0.05
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <mesh position={[0, (high + low) / 2, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, high - low, 8]} />
        <meshPhysicalMaterial
          color={isGreen ? "#22c55e" : "#ef4444"}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={isGreen ? "#16a34a" : "#dc2626"}
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, bodyY, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.35, bodyHeight, 0.35]} />
        <meshPhysicalMaterial
          color={isGreen ? "#22c55e" : "#ef4444"}
          metalness={0.7}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={isGreen ? "#16a34a" : "#dc2626"}
          emissiveIntensity={0.4}
          transmission={0.1}
          thickness={0.5}
          envMapIntensity={1.5}
        />
      </mesh>
      <pointLight position={[0, bodyY, 0]} intensity={0.5} distance={2} color={isGreen ? "#22c55e" : "#ef4444"} />
    </group>
  )
}

function CandleChart() {
  const candleData = useMemo(
    () => [
      { open: 1.5, close: 2.3, high: 2.6, low: 1.3 },
      { open: 2.3, close: 1.9, high: 2.5, low: 1.7 },
      { open: 1.9, close: 2.7, high: 3.0, low: 1.8 },
      { open: 2.7, close: 2.2, high: 2.8, low: 2.0 },
      { open: 2.2, close: 3.1, high: 3.4, low: 2.1 },
      { open: 3.1, close: 2.6, high: 3.2, low: 2.4 },
      { open: 2.6, close: 3.5, high: 3.8, low: 2.5 },
      { open: 3.5, close: 3.0, high: 3.6, low: 2.8 },
    ],
    [],
  )

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#d4af37" />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#fbbf24" />
      <spotLight position={[0, 15, 0]} angle={0.4} penumbra={1} intensity={2} color="#d4af37" castShadow />

      <Environment preset="night" />

      {candleData.map((candle, index) => (
        <Candle key={index} position={[(index - candleData.length / 2) * 0.9, 0, 0]} {...candle} index={index} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
      />

      <gridHelper args={[12, 20, "#d4af37", "#1a1a1a"]} position={[0, -0.5, 0]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.51, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  )
}

export default function CandleChart3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 4, 10], fov: 45 }} shadows gl={{ antialias: true, alpha: true }}>
        <CandleChart />
      </Canvas>
    </div>
  )
}
