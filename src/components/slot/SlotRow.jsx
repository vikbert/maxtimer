import classNames from 'classnames';
import {dateToSlotString, isActiveSlot} from '../../utils/Date';
import {useState} from 'preact/compat';

const SlotRow = ({slot, id, updateSlotCallback}) => {
    const [value, setValue] = useState(slot.title);
    const handleChangeTitle = (event) => {
        setValue(event.target.value);
    };

    const handleSubmitChangeTitle = (event) => {
        event.preventDefault();
        updateSlotCallback(id, {
            ...slot,
            title: value,
        });
    }

    return (
        <li class={classNames({'active': isActiveSlot(slot.start, slot.end)})}>
            <span className="time-slot">{`${dateToSlotString(new Date(slot.start))} - ${dateToSlotString(new Date(slot.end))}`}</span>
            <form onsubmit={handleSubmitChangeTitle}>
                <input class="input-title" type="text" value={value} onchange={handleChangeTitle}/>
            </form>
        </li>
    );
};

export default SlotRow;
