function ListItem({ title, temp, ep }) {
  return (
    <li
      className="flex flex-wrap items-center justify-between gap-2
        border-b border-border py-3"
    >
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-muted"> T{temp} E{ep} </p>
      </div>
    </li>
  );
}

export default ListItem;
