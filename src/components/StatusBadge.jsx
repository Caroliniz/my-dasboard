function StatusBadge({ label, isActive = false }) {
  const colorClass = isActive
    ? 'border-primary bg-primary text-background'
    : 'border-border text-muted';

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-bold ${colorClass}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge;
