import { render } from 'preact';

const TaskSegment = ({task}) => {
  return (
    <li>
      <span className="time-slot">{`${task.start} - ${task.end}`}</span>
      <div className="content">
        <h3>{task.title}</h3>
        <p className="info">{task.info}</p>
      </div>
    </li>
  );
}

export default TaskSegment;
