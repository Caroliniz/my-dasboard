import StatusBadge from './StatusBadge.jsx';

function ListItem({ title, temp, ep, isCompleted = false }) {
  return (
    <li
      className="flex flex-wrap items-center justify-between gap-2
        border-b border-border py-3"
    >
      <div>
        <p className="flex items-center gap-2 font-bold">
          {isCompleted && <span aria-hidden="true">🏆</span>}
          {title}
        </p>
        <p className="text-sm text-muted">
          {' '}
          T{temp} E{ep} {isCompleted ? 'até zerar' : 'jogadas até agora'}
        </p>
      </div>
      <StatusBadge
        label={isCompleted ? 'Zerado' : 'Jogando'}
        isActive={!isCompleted}
      />
    </li>
  );
}

export default ListItem;
