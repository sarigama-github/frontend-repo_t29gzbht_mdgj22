export default function PrototypeViewer({ prototype, onCopy }) {
  if (!prototype) return null
  const { site_type, version, code } = prototype

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">Generated Prototype</h3>
            <p className="text-slate-300 text-sm">Type: {site_type} • Version {version}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onCopy?.(code)} className="px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">Copy Code</button>
            <a href={URL.createObjectURL(new Blob([code], { type: 'text/html' }))} download={`prototype-${site_type}-v${version}.html`} className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500">Download</a>
          </div>
        </div>
        <div className="mt-4 h-[560px] rounded-xl overflow-hidden bg-black/60 border border-white/10">
          <iframe title="prototype" className="w-full h-full" srcDoc={code} />
        </div>
      </div>
    </section>
  )
}
