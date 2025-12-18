const SimpleBackground = () => {
  const symbols = ['{ }', '< />', '( )', '=>', '&&', '[]'];

  // stable positions (no re-random on scroll)
  const particles = [
    { left: '20%', top: '30%' },
    { left: '70%', top: '40%' },
    { left: '50%', top: '70%' },
    { left: '30%', top: '60%' },
    { left: '80%', top: '20%' },
    { left: '10%', top: '80%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-800 via-blue-950 to-black-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black-200/5 via-black-500/5 to-gray-200/5 animate-pulse" />

        <div
          className="absolute inset-0 opacity-15 will-change-transform"
          style={{
            background:
              'linear-gradient(360deg, transparent 5%, rgba(12, 247, 255, 1) 50%, transparent 70%)',
            animation: 'moveGradient 25s linear infinite',
          }}
        />

        <div
          className="absolute inset-0 opacity-10 will-change-transform"
          style={{
            background:
              'linear-gradient(360deg, transparent 5%, rgba(0, 255, 157, 1) 50%, transparent 70%)',
            animation: 'moveGradient 35s linear infinite reverse',
          }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="w-full h-full will-change-opacity"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, #ff0303ff, transparent),
              radial-gradient(1px 1px at 80% 60%, #4b00faff, transparent),
              radial-gradient(1px 1px at 60% 80%, #000711ff, transparent)
            `,
            backgroundSize: '400px 400px',
            animation: 'twinkle 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Code Rain (optimized) */}
      <div className="absolute inset-0 opacity-100">
        {[...Array(8)].map((_, col) => (
          <div
            key={col}
            className="absolute font-mono text-xs will-change-transform"
            style={{
              left: `${col * 10}%`,
              top: '-30%',
              color: col % 2 ? '#09cff1ff' : '#530affff',
              animation: `fall ${28 + col * 3}s linear infinite`,
              animationDelay: `${col * 2}s`,
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="mb-4 opacity-100">
                {symbols[Math.floor(Math.random() * symbols.length)]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Floating Particles (reduced & stable) */}
      <div className="absolute inset-0 opacity-100">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-100 will-change-transform"
            style={{
              left: p.left,
              top: p.top,
              backgroundColor:
                i % 2 === 0 ? '#0bdaffff' : '#540bffff',
              boxShadow: '0 0 4px currentColor',
              animation: `float ${14 + i * 3}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Glow Orbs (lighter blur) */}
      {/* <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full opacity-10 bg-cyan-400 blur-2xl animate-pulse" /> */}
      {/* <div className="absolute bottom-1/3 right-1/6 w-64 h-64 rounded-full opacity-10 bg-purple-400 blur-2xl animate-pulse delay-2000" /> */}
    </div>
  );
};

export default SimpleBackground;
