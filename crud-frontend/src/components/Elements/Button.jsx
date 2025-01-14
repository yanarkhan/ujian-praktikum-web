const ActionButton = ({ label, type }) => (
  <button className={`btn btn-${type}`}>{label}</button>
);

export default ActionButton;
