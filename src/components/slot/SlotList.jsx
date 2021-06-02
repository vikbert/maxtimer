import SlotRow from './SlotRow';
import useLocalStorage, {APP_KEY_SLOTS} from '../../hooks/useLocalStorage';
import TimeSlotGenerator from '../../services/TimeSlotGenerator';
import {useEffect} from 'preact/hooks';

export default function SlotList() {
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

  if (Object.keys(storedValue).length === 0) {
    initSlots();

    return (
      <div class="overlay open" onClick={refreshPage}>
        <button type="submit" class="start" onClick={refreshPage}>
          Get started!
        </button>
      </div>
    );
  }

  return (
    <div class="timeline">
      <ul>
        <li class="jump-current">
          <span className="time-slot" onClick={jumpToCurrent}>
            Current
          </span>
          <span className="time-slot" onClick={handleResetSlots}>
            Reset
          </span>
        </li>
        {Object.keys(storedValue).map((id) => (
          <SlotRow
            key={id}
            id={id}
            slot={storedValue[id]}
            updateSlotCallback={(id, slot) => updateSlot(id, slot)}
          />
        ))}
      </ul>
    </div>
  );
}
