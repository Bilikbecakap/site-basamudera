"use client"

export function BatikDivider() {
  const W = 1440
  const H = 88
  const triW = 120       // each triangle width
  const triH = 64        // triangle height (tip to base)
  const tipY = H - triH  // y-position of triangle tips = 24
  const count = W / triW // 12 triangles

  // Paper-filled upward tumpal triangles
  const fillPath = [
    `M0,${H}`,
    ...Array.from({ length: count }, (_, i) =>
      `L${i * triW + triW / 2},${tipY} L${(i + 1) * triW},${H}`
    ),
    `L${W},${H} Z`,
  ].join(" ")

  // Gold stroke tracing the zigzag line
  const strokePath = [
    `M0,${H}`,
    ...Array.from({ length: count }, (_, i) =>
      `L${i * triW + triW / 2},${tipY} L${(i + 1) * triW},${H}`
    ),
  ].join(" ")

  // Inner concentric triangle outlines (batik layered tumpal detail)
  const iHW = triW * 0.28  // inner half-width
  const iH  = triH * 0.42  // inner height
  const innerPaths = Array.from({ length: count }, (_, i) => {
    const cx = i * triW + triW / 2
    const ty = tipY
    return `M${cx},${ty + 8} L${cx - iHW},${ty + 8 + iH} L${cx + iHW},${ty + 8 + iH} Z`
  })

  // Tiny diamond at each triangle tip
  const tips = Array.from({ length: count }, (_, i) => ({
    cx: i * triW + triW / 2,
    cy: tipY,
  }))

  return (
    <div
      className="relative w-full bg-ocean overflow-hidden"
      style={{ height: H, lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height={H}
      >
        {/* Main tumpal fill — paper cream */}
        <path d={fillPath} fill="var(--paper)" />

        {/* Inner concentric triangles — batik depth */}
        {innerPaths.map((d, i) => (
          <path
            key={`inner-${i}`}
            d={d}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.2"
            opacity="0.5"
          />
        ))}

        {/* Gold zigzag accent line */}
        <path
          d={strokePath}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.8"
          opacity="0.85"
        />

        {/* Terracotta diamond at each tip */}
        {tips.map(({ cx, cy }, i) => (
          <path
            key={`tip-${i}`}
            d={`M${cx},${cy - 5} L${cx + 4},${cy} L${cx},${cy + 5} L${cx - 4},${cy} Z`}
            fill="var(--terracotta)"
          />
        ))}
      </svg>
    </div>
  )
}
