export default class Slot {
    start;
    end;
    title;

    constructor(startDate, title = '') {
        this.start = startDate;
        const cloned = new Date(startDate);
        this.end = new Date(cloned.setMinutes(this.start.getMinutes() + 15));
        this.title = title;
    }

    start() {
        return this.start;
    }

    end() {
        return this.end;
    }
}
