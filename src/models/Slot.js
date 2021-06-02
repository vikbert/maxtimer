export default class Slot {
  start;
  end;
  size;
  title;

  constructor(startDate, title = '', size = 5) {
    this.start = startDate;
    const cloned = new Date(startDate);
    this.size = size;
    this.end = new Date(cloned.setMinutes(this.start.getMinutes() + size));
    this.title = title;
  }

  start() {
    return this.start;
  }

  end() {
    return this.end;
  }
}
