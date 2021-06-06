import useLocalStorage, {APP_KEY_SLOTS} from '../../hooks/useLocalStorage';
import {getTimeInterval} from '../../utils/Date';
import SettingHeader from '../settings/SettingHeader';
import SlotList from './SlotList';

export default function SlotListContainer() {
  const [storedValue, persist] = useLocalStorage(APP_KEY_SLOTS, {});

  const updateSlot = (id, slot) => {
    persist({
      ...storedValue,
      [id]: slot,
    });
  };

  return (
    <>
      <SettingHeader slotsPersist={persist} />

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
