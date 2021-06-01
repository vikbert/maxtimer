import classNames from 'classnames';

const SlotRow = ({slot}) => {
    // 2021-06-01T05:30
    const dateToSlotString = (date) => {
        if (!date) {
            return '';
        }

        return date.toISOString().substr(11, 5);
    }
    return (
        <li class={classNames({'active': slot.isActive()})}>
            <span className="time-slot">{`${dateToSlotString(slot.start)} - ${dateToSlotString(slot.end)}`}</span>
            <span className="content">{slot.title}</span>
        </li>
    );
};

export default SlotRow;
