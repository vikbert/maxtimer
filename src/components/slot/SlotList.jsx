import React from 'react';
import SlotRow from './SlotRow';

export default function SlotList({
  allowedTimeInterval,
  slots,
  updateSlotCallback,
}) {
  const [intervalStart, intervalEnd] = allowedTimeInterval;

  return (
    <ul>
      {Object.keys(slots).map((id) => {
        const slot = slots[id];
        const slotStart = new Date(slot.start);
        const slotEnd = new Date(slot.end);

        const isSlotInInterval =
          intervalStart <= slotStart && intervalEnd >= slotEnd;

        if (!isSlotInInterval) {
          return null;
        }

        return (
          <SlotRow
            key={id}
            id={id}
            slot={slot}
            updateSlotCallback={(id, slot) => updateSlotCallback(id, slot)}
          />
        );
      })}
    </ul>
  );
}
