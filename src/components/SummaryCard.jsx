function SummaryCard({ title, value, icon=null, isHighlighted = false }) {
  return (
    <article
      className={`rounded-xl border-2 bg-background p-4 text-foreground ${
        isHighlighted ? 'border-primary' : 'border-border'
      }`}
    >
      <p className="flex items-center gap-2 text-sm text-muted">
        {icon && <span aria-hidden="true">{icon}</span>}
        {title}
      </p>
      <p className="mt-2 font-heading text-3xl font-bold">{value}</p>
    </article>
  )
}

export default SummaryCard
