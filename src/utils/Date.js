export const dateToSlotString = (date) => {
  if (!date) {
    return '';
  }

  return date.toLocaleTimeString().substr(0, 5);
};

export const isActiveSlot = (start, end) => {
  if (typeof start === 'string' && typeof end === 'string') {
    start = new Date(start);
    end = new Date(end);
  }

  const now = new Date();

  return start < now && now < end;
};

export const getTimeInterval = (startHour, endHour) => {
  let start = new Date();
  start.setHours(startHour, 0, 0, 0);

  let end = new Date();
  end.setHours(endHour, 0, 0, 0);

  return [start, end];
};

export const isDateGone = (date) => {
  let dateObj = date;
  if (typeof date === 'string') {
    dateObj = new Date(date);
  }

  if (typeof dateObj === 'object') {
    return (dateObj.getTime() - (new Date()).getTime()) < 0;
  }

  return false;
}
