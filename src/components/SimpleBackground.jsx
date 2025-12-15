const SimpleBackground = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {/* Premium Neon Space Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated Neon Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 animate-pulse" />
        
        {/* Moving Gradient Layers */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
            animation: 'moveGradient 15s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(-45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
            animation: 'moveGradient 20s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Constellation Grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 20% 30%, #06b6d4, transparent),
              radial-gradient(1px 1px at 40% 70%, #8b5cf6, transparent),
              radial-gradient(1px 1px at 90% 40%, #3b82f6, transparent),
              radial-gradient(1px 1px at 70% 80%, #06b6d4, transparent),
              radial-gradient(1px 1px at 10% 90%, #8b5cf6, transparent),
              radial-gradient(1px 1px at 80% 10%, #3b82f6, transparent)
            `,
            backgroundSize: '300px 300px, 400px 400px, 350px 350px, 450px 450px, 380px 380px, 320px 320px',
            animation: 'twinkle 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#3b82f6',
              boxShadow: `0 0 6px currentColor`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Premium Glow Effects */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full opacity-10 bg-gradient-radial from-cyan-400 to-transparent blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 rounded-full opacity-8 bg-gradient-radial from-purple-400 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-6 bg-gradient-radial from-blue-400 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Subtle Code Elements */}
      <div className="absolute inset-0 opacity-40">
        {['{ }', '< />', '[ ]', '( )', '=>', '&&', '||', '==='].map((code, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs select-none"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#3b82f6',
              textShadow: '0 0 8px currentColor',
              animation: `fadeInOut ${12 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes moveGradient {
          0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          50% { transform: translateX(50%) translateY(50%) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default SimpleBackground;