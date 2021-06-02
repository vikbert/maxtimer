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
    const generator = new TimeSlotGenerator(15);

    return generator.generateSlots();
  };

  const jumpToCurrent = () => {
    const activeSlot = document.getElementById('active');
    if (activeSlot) {
      activeSlot.scrollIntoView(true);
    }
  };

  if (Object.keys(storedValue).length === 0) {
    persist(initSlots());
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
        <li class="jump-current" onClick={jumpToCurrent}>
          <span className="time-slot">Current Slot</span>
          <span className="time-slot">Current Slot</span>
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
