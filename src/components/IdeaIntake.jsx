import { useState } from 'react'

export default function IdeaIntake({ onValidated, onGenerated, backendUrl }) {
  const [idea, setIdea] = useState('A platform for teachers to share lesson plans.')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateIdea = async () => {
    setError(''); setLoading(true)
    try {
      const res = await fetch(`${backendUrl}/api/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: idea })
      })
      if (!res.ok) throw new Error('Validation failed')
      const data = await res.json()
      onValidated && onValidated(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const generate = async (site_type) => {
    setError(''); setLoading(true)
    try {
      const res = await fetch(`${backendUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: idea, site_type })
      })
      if (!res.ok) throw new Error('Generation failed')
      const data = await res.json()
      onGenerated && onGenerated(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
        <label className="block text-sm text-slate-300 mb-2">Your idea</label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={4}
          className="w-full rounded-xl bg-black/30 text-white p-4 border border-white/10 outline-none"
          placeholder="Describe what you want to build"
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={validateIdea} disabled={loading} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50">{loading ? 'Validating…' : 'Validate Idea'}</button>
          <button onClick={() => generate('landing')} disabled={loading} className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50">Generate Landing</button>
          <button onClick={() => generate('dashboard')} disabled={loading} className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-50">Generate Dashboard</button>
          <button onClick={() => generate('ecommerce')} disabled={loading} className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white disabled:opacity-50">Generate E‑commerce</button>
          <button onClick={() => generate('blog')} disabled={loading} className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-50">Generate Blog</button>
        </div>
        {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
      </div>
    </section>
  )
}
