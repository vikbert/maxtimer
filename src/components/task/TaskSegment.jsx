import { render } from 'preact';

const TaskSegment = ({task}) => {
  return (
    <li>
      <span className="time-slot">{`${task.start} - ${task.end}`}</span>
      <span className="content">
        {task.title}
      </span>
    </li>
  );
}

export default TaskSegment;
