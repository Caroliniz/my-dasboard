function Panel({ id, title, className = '', children }) {
  return (
    <section
      id={id}
      className={`rounded-xl border border-border bg-surface p-4 ${className}`}
    >
      <h2 className="mb-4 font-heading text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default Panel;
