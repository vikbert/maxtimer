import useLocalStorage, {APP_KEY_SLOTS} from '../../hooks/useLocalStorage';
import TimeSlotGenerator from '../../services/TimeSlotGenerator';
import {getTimeInterval} from '../../utils/Date';
import SlotList from './SlotList';

export default function SlotListContainer() {
  const [storedValue, persist] = useLocalStorage(APP_KEY_SLOTS, {});

  const updateSlot = (id, slot) => {
    persist({
      ...storedValue,
      [id]: slot,
    });
  };

  const initSlots = () => {
    const generator = new TimeSlotGenerator();

    persist(generator.generateSlots());
  };

  const jumpToCurrent = () => {
    const activeSlot = document.getElementById('active');
    if (activeSlot) {
      activeSlot.scrollIntoView(true);
    }
  };

  const handleResetSlots = () => {
    if (window.confirm('Reset all tasks?')) {
      initSlots();
      location.reload();
    }
  };

  return (
    <>
      <div className="actions">
        <ul>
          <li>
            <button onClick={jumpToCurrent}>Current</button>
            <button onClick={handleResetSlots}>Reset</button>
          </li>
        </ul>
      </div>
      <div className="list-container">
        <div class="timeline box">
          <h2 className="timeline-title">Morgen</h2>
          <SlotList
            allowedTimeInterval={getTimeInterval(5, 12)}
            slots={storedValue}
            updateSlotCallback={(id, slot) => updateSlot(id, slot)}
          />
        </div>
        <div class="timeline box">
          <h2 className="timeline-title">Mittag</h2>
          <SlotList
            allowedTimeInterval={getTimeInterval(12, 16)}
            slots={storedValue}
            updateSlotCallback={(id, slot) => updateSlot(id, slot)}
          />
        </div>
        <div class="timeline box">
          <h2 className="timeline-title">Abend</h2>
          <SlotList
            allowedTimeInterval={getTimeInterval(16, 22)}
            slots={storedValue}
            updateSlotCallback={(id, slot) => updateSlot(id, slot)}
          />
        </div>
      </div>
    </>
  );
}
