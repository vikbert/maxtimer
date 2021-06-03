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

  const startDate = new Date(slot.start);
  const endDate = new Date(slot.end);
  const now = new Date();
  const isActive = startDate < now && now < endDate;

  return (
    <li class={classNames({active: isActive})}>
      <span className="time-slot">
        {`${dateToSlotString(startDate)} - ${dateToSlotString(endDate)}`}
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
