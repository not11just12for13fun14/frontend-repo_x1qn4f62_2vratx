import React, { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AgentBuilder() {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    provider: 'openai',
    model: 'gpt-4o-mini',
    system_prompt: 'You are a helpful AI agent.',
    color: '#7c3aed',
    temperature: 0.7,
  })

  const fetchAgents = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/agents`)
      const data = await res.json()
      setAgents(data.items || [])
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => { fetchAgents() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${BACKEND_URL}/api/agents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to create agent')
      setForm({ ...form, name: '' })
      await fetchAgents()
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full px-6 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
          <h2 className="text-white text-2xl font-semibold">Create Agent</h2>
          <p className="text-white/70 text-sm mt-1">Define a model, prompt, and theme color.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-white/80 text-sm mb-1">Name</label>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50" placeholder="E.g., Research Copilot" required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-white/80 text-sm mb-1">Provider</label>
                <select value={form.provider} onChange={e=>setForm({...form, provider:e.target.value})} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white">
                  <option value="openai">OpenAI</option>
                  <option value="anthropic">Anthropic</option>
                  <option value="google">Google</option>
                  <option value="openrouter">OpenRouter</option>
                  <option value="meta">Meta</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Model</label>
                <input value={form.model} onChange={e=>setForm({...form, model:e.target.value})} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50" placeholder="e.g., gpt-4o-mini, claude-3-5-sonnet" required />
              </div>
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">System Prompt</label>
              <textarea value={form.system_prompt} onChange={e=>setForm({...form, system_prompt:e.target.value})} rows={4} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/50" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-white/80 text-sm mb-1">Accent Color</label>
                <input type="color" value={form.color} onChange={e=>setForm({...form, color:e.target.value})} className="w-full h-10 rounded-xl bg-white/10 border border-white/20" />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Temperature</label>
                <input type="number" step="0.1" min="0" max="2" value={form.temperature} onChange={e=>setForm({...form, temperature:parseFloat(e.target.value)})} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-white" />
              </div>
            </div>
            <button disabled={loading} className="w-full rounded-xl bg-white/20 hover:bg-white/30 text-white px-4 py-2 border border-white/20 transition">
              {loading ? 'Creating...' : 'Create Agent'}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-white/90 text-lg">Your Agents</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {agents.map((a)=> (
              <div key={a.id} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl" style={{background:a.color}} />
                  <div>
                    <div className="text-white font-medium">{a.name}</div>
                    <div className="text-white/60 text-xs">{a.provider} · {a.model}</div>
                  </div>
                </div>
              </div>
            ))}
            {agents.length === 0 && (
              <div className="text-white/70">No agents yet. Create your first one!</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
