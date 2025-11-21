import React from 'react'
import Hero from './components/Hero'
import AgentBuilder from './components/AgentBuilder'
import DesktopMobileShowcase from './components/DesktopMobileShowcase'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10]">
      {/* iOS-style glass navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
            <span className="text-white/90 font-medium">TriAgent</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#build" className="text-white/70 hover:text-white transition text-sm">Build</a>
            <a href="#export" className="text-white/70 hover:text-white transition text-sm">Export</a>
          </div>
        </div>
      </header>

      <Hero />

      <main id="build" className="relative -mt-28">
        <div className="max-w-6xl mx-auto">
          <AgentBuilder />
          <DesktopMobileShowcase />
        </div>
      </main>

      <footer id="export" className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 text-white/70 text-sm">
          Export instructions:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Web: Deploy this site to any static host.</li>
            <li>Desktop: Wrap build with Electron (electron-builder) pointing to the same web app.</li>
            <li>Mobile: Use Capacitor to generate iOS/Android from this web codebase.</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
