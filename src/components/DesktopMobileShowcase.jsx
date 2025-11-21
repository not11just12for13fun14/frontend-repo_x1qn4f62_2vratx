import React from 'react'

export default function DesktopMobileShowcase() {
  return (
    <section className="relative w-full px-6 pb-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
          <h3 className="text-white text-xl font-semibold">Desktop App</h3>
          <p className="text-white/70 text-sm mb-4">Built with Electron wrapper using the same web codebase.</p>
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
            <div className="text-white/80">Electron-ready UI</div>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
          <h3 className="text-white text-xl font-semibold">Mobile App</h3>
          <p className="text-white/70 text-sm mb-4">Ship to iOS/Android with Capacitor. iOS 16+ glass look.</p>
          <div className="aspect-[9/19] rounded-3xl overflow-hidden mx-auto w-64 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 flex items-center justify-center">
            <div className="text-white/80">Capacitor-ready UI</div>
          </div>
        </div>
      </div>
    </section>
  )
}
