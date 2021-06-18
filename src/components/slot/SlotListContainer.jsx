import useLocalStorage, {APP_KEY_SLOTS} from '../../hooks/useLocalStorage';
import {getTimeInterval, isDateGone} from '../../utils/Date';
import SettingHeader from '../settings/SettingHeader';
import SlotList from './SlotList';
import SvgSunrise from './SvgSunrise';
import SvgSun from './SvgSun';
import SvgMoon from './SvgMoon';
import { useEffect } from 'preact/hooks';
import Popup from '../popup'
import useVisibility from '../../hooks/useVisibility';
import TimeSlotGenerator from '../../services/TimeSlotGenerator';

export default function SlotListContainer() {
  const [storedValue, persist] = useLocalStorage(APP_KEY_SLOTS, {});
  const { visible, hide, show } = useVisibility(false);

  const updateSlot = (id, slot) => {
    persist({
      ...storedValue,
      [id]: slot,
    });
  };

  const resetSlots = () => {
      let generator;
      generator = new TimeSlotGenerator();
      console.log(generator.generateSlots());
      persist(generator.generateSlots());
      location.reload();
  };

  useEffect(() => {
    const numberSlots = Object.keys(storedValue).length;
    if (0 === numberSlots) {
      show();
      return;
    }

    if (storedValue.length > 0) {
      const lastSlot = storedValue[storedValue.length -1];
      if (isDateGone(lastSlot.end)) {
        show();
      }
    }
  }, []);

  return (
    <>
      <SettingHeader slotsPersist={persist} />
      {visible && (
        <Popup visible={visible} hide={hide}>
          <h1>Musk Timer</h1>

          <div className="setting-actions">
            <button onClick={resetSlots}>Getting started</button>
          </div>
        </Popup>
      )}

      <div className="list-container">
        <div class="timeline box">
          <SvgSunrise width={100} height={50} color={'#ff4d00'} />
          <SlotList
            allowedTimeInterval={getTimeInterval(5, 12)}
            slots={storedValue}
            updateSlotCallback={(id, slot) => updateSlot(id, slot)}
          />
        </div>
        <div class="timeline box">
          <SvgSun width={100} height={50} color={'#ffdc0bed'} />
          <SlotList
            allowedTimeInterval={getTimeInterval(12, 16)}
            slots={storedValue}
            updateSlotCallback={(id, slot) => updateSlot(id, slot)}
          />
        </div>
        <div class="timeline box">
          <SvgMoon width={100} height={50} color={'#afe5fe'} />
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
