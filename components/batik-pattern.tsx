interface BatikPatternProps {
  className?: string
}

export function BatikPattern({ className = "" }: BatikPatternProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="batikSmall" patternUnits="userSpaceOnUse" width="20" height="20">
          <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.3" />
          <circle cx="20" cy="0" r="1" fill="currentColor" opacity="0.3" />
          <circle cx="0" cy="20" r="1" fill="currentColor" opacity="0.3" />
          <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      
      {/* Outer decorative frame */}
      <rect x="10" y="10" width="180" height="180" rx="20" fill="url(#batikSmall)" className="text-primary" />
      
      {/* Central flower motif - Kawung inspired */}
      <g className="text-primary" fill="currentColor">
        {/* Center */}
        <circle cx="100" cy="100" r="15" opacity="0.6" />
        
        {/* Petals - 4 directions */}
        <ellipse cx="100" cy="60" rx="12" ry="25" opacity="0.4" />
        <ellipse cx="100" cy="140" rx="12" ry="25" opacity="0.4" />
        <ellipse cx="60" cy="100" rx="25" ry="12" opacity="0.4" />
        <ellipse cx="140" cy="100" rx="25" ry="12" opacity="0.4" />
        
        {/* Diagonal petals */}
        <ellipse cx="70" cy="70" rx="10" ry="20" transform="rotate(-45 70 70)" opacity="0.3" />
        <ellipse cx="130" cy="70" rx="10" ry="20" transform="rotate(45 130 70)" opacity="0.3" />
        <ellipse cx="70" cy="130" rx="10" ry="20" transform="rotate(45 70 130)" opacity="0.3" />
        <ellipse cx="130" cy="130" rx="10" ry="20" transform="rotate(-45 130 130)" opacity="0.3" />
        
        {/* Corner decorations */}
        <circle cx="40" cy="40" r="8" opacity="0.2" />
        <circle cx="160" cy="40" r="8" opacity="0.2" />
        <circle cx="40" cy="160" r="8" opacity="0.2" />
        <circle cx="160" cy="160" r="8" opacity="0.2" />
      </g>
      
      {/* Connecting lines */}
      <g stroke="currentColor" strokeWidth="1" className="text-primary" opacity="0.2">
        <line x1="40" y1="40" x2="70" y2="70" />
        <line x1="160" y1="40" x2="130" y2="70" />
        <line x1="40" y1="160" x2="70" y2="130" />
        <line x1="160" y1="160" x2="130" y2="130" />
      </g>
    </svg>
  )
}
