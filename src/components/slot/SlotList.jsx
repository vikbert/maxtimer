import React from 'react';
import SlotRow from './SlotRow';
import useToast from './../../hooks/useToast';
import textToSpeech from '../../utils/speak';

export default function SlotList({
  allowedTimeInterval,
  slots,
  updateSlotCallback,
}) {
  const [intervalStart, intervalEnd] = allowedTimeInterval;
  const notify = useToast();

  const alertTimeOut = (slotEndDate) => {
    if (slotEndDate <= new Date()) {
      notify({
        type: 'error',
        message: 'Alert the slot in the past is not possible!',
      });

      return;
    }

    notify({
      type: 'success',
      message: 'Alert is set for ' + slotEndDate.toLocaleTimeString(),
    });


    textToSpeech('Alarm is ready');

    const diffInMilliSeconds = slotEndDate.getTime() - new Date().getTime();
    setTimeout(() => {
      textToSpeech('The time is over.');
    }, diffInMilliSeconds);
  };

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
            alertTimeOut={(endDate) => alertTimeOut(endDate)}
            updateSlotCallback={(id, slot) => updateSlotCallback(id, slot)}
          />
        );
      })}
    </ul>
  );
}
