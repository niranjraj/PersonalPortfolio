const ProgressBar = (props: { completed: number; label: string }) => {
  return (
    <div className="progress-item">
      <span className="item-label">{props.label}</span>
      <span className="progressbar-container">
        <div
          className="progressbar-filler"
          style={{ width: `${props.completed}%` }}
        ></div>
      </span>
      <span className="progressbar-label">{`${props.completed}%`}</span>
    </div>
  );
};

export default ProgressBar;
