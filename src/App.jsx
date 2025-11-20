import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import IdeaIntake from './components/IdeaIntake'
import ValidationPanel from './components/ValidationPanel'
import PrototypeViewer from './components/PrototypeViewer'

function App() {
  const [validation, setValidation] = useState(null)
  const [prototype, setPrototype] = useState(null)
  const [backendUrl, setBackendUrl] = useState('')

  useEffect(() => {
    setBackendUrl(import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000')
  }, [])

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Code copied to clipboard')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <IdeaIntake backendUrl={backendUrl} onValidated={setValidation} onGenerated={setPrototype} />
      <ValidationPanel result={validation} />
      <PrototypeViewer prototype={prototype} onCopy={handleCopy} />
      <section className="max-w-6xl mx-auto px-6 pb-12 text-center text-slate-400">
        <p>Want another style? Ask for variations like “give me a blog layout” or “try an e‑commerce template”.</p>
      </section>
    </div>
  )
}

export default App
