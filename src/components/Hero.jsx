import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[56vh] md:h-[64vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for readability; allow interactions with 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-950" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-10">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur">
            AI-powered no‑code builder
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Transform ideas into working prototypes
          </h1>
          <p className="mt-3 text-slate-200/90 max-w-2xl">
            Paste any raw idea. We validate it instantly and generate a reusable, single‑file prototype in seconds.
          </p>
        </div>
      </div>
    </section>
  )
}
