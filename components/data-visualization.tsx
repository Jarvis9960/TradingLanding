const barHeights = [92, 68, 85, 74, 100, 64, 82, 70, 88, 76, 94, 72, 86, 78, 90, 66, 84, 80, 96, 73]

export default function DataVisualization() {
  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex h-64 items-end justify-between gap-2">
          {barHeights.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-gradient-to-t from-[#d4af37] to-white"
              style={{ height: `${height}%`, opacity: 0.5 + height / 200 }}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-[#d4af37]">99.7%</div>
            <div className="mt-1 text-sm text-gray-400">Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#d4af37]">{"<"}50ms</div>
            <div className="mt-1 text-sm text-gray-400">Execution</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#d4af37]">24/7</div>
            <div className="mt-1 text-sm text-gray-400">Active</div>
          </div>
        </div>
      </div>
    </div>
  )
}
