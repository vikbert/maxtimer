import Slot from '../models/Slot';

export default class TimeSlotGenerator {
  startDate;
  endDate;
  slotSize;

  constructor(
    slotSizeMinutes = 15,
    initStartTime = '05:00',
    initEndTime = '22:00',
  ) {
    const today = new Date();
    const currentDateString = today.toISOString().slice(0, 10);

    this.startDate = new Date(`${currentDateString} ${initStartTime}`);
    this.endDate = new Date(`${currentDateString} ${initEndTime}`);
    this.slotSize = slotSizeMinutes;
  }

  generateSlots() {
    let slots = [];
    let currentSlot = new Slot(this.startDate, '', this.slotSize);
    while (currentSlot.end < this.endDate) {
      slots = [...slots, currentSlot];
      currentSlot = new Slot(currentSlot.end, '', this.slotSize);
    }

    return slots;
  }
}
