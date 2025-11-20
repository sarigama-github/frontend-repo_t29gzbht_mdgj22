export default function ValidationPanel({ result }) {
  if (!result) return null
  const { scores, risks, opportunities, recommendations, summary } = result

  const scoreItems = [
    { key: 'market_feasibility', label: 'Market feasibility' },
    { key: 'target_audience', label: 'Target audience' },
    { key: 'monetization_potential', label: 'Monetization potential' },
    { key: 'technical_complexity', label: 'Technical complexity' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 pb-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-4">Scores</h3>
          <ul className="space-y-3">
            {scoreItems.map(({ key, label }) => (
              <li key={key} className="flex items-center justify-between text-slate-200">
                <span>{label}</span>
                <span className="font-mono px-2 py-1 rounded bg-black/30">{scores?.[key] ?? '-'}/10</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Risks</h3>
            <ul className="list-disc list-inside text-slate-200/90 space-y-1">
              {risks?.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Opportunities</h3>
            <ul className="list-disc list-inside text-slate-200/90 space-y-1">
              {opportunities?.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
            <h3 className="text-white font-semibold mb-2">Recommendations</h3>
            <ul className="list-disc list-inside text-slate-200/90 space-y-1">
              {recommendations?.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
            <p className="mt-3 text-slate-300 text-sm">{summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
