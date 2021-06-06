import React from 'react';
import TimeSlotGenerator from '../../services/TimeSlotGenerator';
import useVisibility from '../../hooks/useVisibility';
import Popup from '../popup';
import SettingContent from './SettingContent';
import useKeyPress from '../../hooks/useKeyPress';
import './setting.css';
import '../form/form.css';
import useLocalStorage, {APP_KEY_SETTING} from '../../hooks/useLocalStorage';

export default function SettingHeader({slotsPersist}) {
  const {visible, show, hide} = useVisibility(false);
  const [storedValue, persist] = useLocalStorage(APP_KEY_SETTING, {});

  useKeyPress('Escape', () => {
    hide();
  });

  const jumpToCurrent = () => {
    const activeSlot = document.getElementById('active');
    if (activeSlot) {
      activeSlot.scrollIntoView(true);
    }
  };

  const resetSlots = () => {
    if (window.confirm('Reset all task and time slots?')) {
      let generator;
      if (storedValue && Object.keys(storedValue).length > 0) {
        generator = new TimeSlotGenerator(
          storedValue.size,
          storedValue.start,
          storedValue.end,
        );
      } else {
        generator = new TimeSlotGenerator();
      }

      slotsPersist(generator.generateSlots());
      location.reload();
    }
  };

  const openSetting = () => {
    show();
  };

  return (
    <>
      {visible && (
        <Popup visible={visible} hide={hide}>
          <SettingContent storedValue={storedValue} persist={persist} />
        </Popup>
      )}
      <div className="setting-actions">
        <ul>
          <li>
            <button onClick={jumpToCurrent}>Current</button>
            <button onClick={resetSlots}>Init / Reset</button>
            <button onClick={openSetting}>Setting</button>
          </li>
        </ul>
      </div>
    </>
  );
}
