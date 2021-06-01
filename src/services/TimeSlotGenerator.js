import Slot from '../models/Slot';

export default class TimeSlotGenerator {
  startDate;
  endDate;

  constructor(initStartTime = '21:00', initEndTime = '22:00') {
    const today = new Date();
    const currentDateString = today.toISOString().slice(0, 10);

    this.startDate = new Date(`${currentDateString} ${initStartTime}`);
    this.endDate = new Date(`${currentDateString} ${initEndTime}`);
  }

  getSlots() {
    let slots = [];
    let currentDate = this.startDate;
    while (currentDate < this.endDate) {
      slots = [...slots, new Slot(new Date(currentDate))];
      currentDate.setMinutes(currentDate.getMinutes() + 15);
      currentDate = new Date(currentDate);
    }

    return slots;
  }
}
