import {render} from 'preact';
import Popup from './components/popup';
import useVisibility from './hooks/useVisibility';
import useKeypress from './hooks/useKeyPress';
import classNames from 'classnames';
import TimeSlotGenerator from './services/TimeSlotGenerator';
import SlotRow from './components/slot/SlotRow';

const generator = new TimeSlotGenerator('06:00', '22:00');
const slots = generator.getSlots();
console.log(slots);

function App() {
  const {visible, show, hide} = useVisibility(false);
  useKeypress('Escape', () => {
    hide();
  });

  const handleOpenPopup = () => {
    show();
  };

  console.log(slots);

  return slots.length > 0 && (
    <>
      <Popup
        title="add a new task"
        visible={visible}
        action={<h1>content</h1>}
      />
      <button onClick={handleOpenPopup}>add new task</button>
      <div className={classNames('timeline')}>
        <ul>
          {slots.map((slot, index) => (
              <SlotRow key={index} slot={slot} />
          ))}
        </ul>
      </div>
    </>
  );
}

render(<App />, document.getElementById('app'));
