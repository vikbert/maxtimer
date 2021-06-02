import classNames from 'classnames';
import {dateToSlotString, isActiveSlot} from '../../utils/Date';
import {useState} from 'preact/compat';

const SlotRow = ({slot, id, updateSlotCallback}) => {
  const [task, setTask] = useState(slot.title);
  const handleChangeTitle = (event) => {
    const userInput = event.target.value;
    setTask(userInput);
  };

  const handleSubmitSlot = () => {
    updateSlotCallback(id, {
      ...slot,
      title: task.trim(),
    });
  };

  const isActive = isActiveSlot(slot.start, slot.end);
  return (
    <li id={isActive ? 'active' : ''} class={classNames({active: isActive})}>
      <span className="time-slot">
        {`${dateToSlotString(new Date(slot.start))} - ${dateToSlotString(
          new Date(slot.end),
        )}`}
      </span>
      <input
        class="input-title"
        name="task"
        type="text"
        value={task}
        onchange={handleChangeTitle}
        onblur={handleSubmitSlot}
      />
    </li>
  );
};

export default SlotRow;
