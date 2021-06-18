import classNames from 'classnames';
import {dateToSlotString} from '../../utils/Date';
import {useState} from 'preact/compat';

const SlotRow = ({slot, id, updateSlotCallback, alertTimeOut}) => {
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

  const handleAlertTimeOut = (slotObj) => {
    alertTimeOut(new Date(slotObj.end));
  };

  const startDate = new Date(slot.start);
  const endDate = new Date(slot.end);
  const now = new Date();
  const isActive = startDate < now && now < endDate;

  return (
    <li id={isActive ? 'active' : ''} class={classNames({active: isActive})}>
      <span className="time-slot" onClick={() => handleAlertTimeOut(slot)}>
        {`${dateToSlotString(startDate)} - ${dateToSlotString(endDate)}`}
      </span>
      <input
        class="input-title"
        name="task"
        autoComplete='off'
        type="text"
        value={task}
        onchange={handleChangeTitle}
        onblur={handleSubmitSlot}
      />
    </li>
  );
};

export default SlotRow;
