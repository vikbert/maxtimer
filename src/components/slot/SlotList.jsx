import React from 'react';
import SlotRow from './SlotRow';

export default function SlotList({slots, updateSlotCallback}) {
  return (
    <ul>
      {Object.keys(slots).map((id) => (
        <SlotRow
          key={id}
          id={id}
          slot={slots[id]}
          updateSlotCallback={(id, slot) => updateSlotCallback(id, slot)}
        />
      ))}
    </ul>
  );
}
