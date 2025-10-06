"use client"

import { useEffect, useState } from "react"

export default function DataVisualization() {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    // Generate random data for animated bars
    const generateData = () => {
      const newBars = Array.from({ length: 20 }, () => Math.random() * 100)
      setBars(newBars)
    }

    generateData()
    const interval = setInterval(generateData, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-strong rounded-2xl p-8 relative overflow-hidden">
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-end justify-between h-64 gap-2">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-[#d4af37] to-white rounded-t transition-all duration-1000 ease-out"
              style={{
                height: `${height}%`,
                opacity: 0.7 + (height / 100) * 0.3,
              }}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37]">99.7%</div>
            <div className="text-sm text-gray-400 mt-1">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37]">{"<"}50ms</div>
            <div className="text-sm text-gray-400 mt-1">Execution</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37]">24/7</div>
            <div className="text-sm text-gray-400 mt-1">Active</div>
          </div>
        </div>
      </div>
    </div>
  )
}
