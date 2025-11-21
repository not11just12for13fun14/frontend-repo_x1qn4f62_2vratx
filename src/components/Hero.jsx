import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center">
          <div className="mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Build AI Agents for Web, Desktop, and Mobile
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              One blueprint. Three platforms. Powered by top models with an elegant iOS-style glass design.
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm border border-white/20">Web</span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm border border-white/20">Desktop</span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm border border-white/20">Mobile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25),rgba(59,130,246,0.15)_60%,transparent_80%)]" />
    </section>
  )
}
