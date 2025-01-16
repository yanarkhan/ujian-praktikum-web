const ActionButton = ({ onClick, label, type, className = "", ...props }) => (
  <button
    className={`btn btn-${type} ${className}`}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
);

export default ActionButton;
