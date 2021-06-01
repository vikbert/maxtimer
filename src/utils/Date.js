export const dateToSlotString = (date) => {
    if (!date) {
        return '';
    }

    return date.toLocaleTimeString().substr(0, 5);
};

export const isActiveSlot = (startDateString, endDateString) => {
    const start = new Date(startDateString);
    const end = new Date(endDateString);

    const now = new Date();

    return start < now && now < end;
};
