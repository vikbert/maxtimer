import useLocalStorage, {APP_KEY_SLOTS} from '../../hooks/useLocalStorage';
import {getTimeInterval} from '../../utils/Date';
import SettingHeader from '../settings/SettingHeader';
import SlotList from './SlotList';
import SvgSunrise from './SvgSunrise';
import SvgSun from './SvgSun';
import SvgMoon from './SvgMoon';

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
