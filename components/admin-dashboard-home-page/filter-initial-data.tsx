const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const oneMonthAgo = currentMonth - 1;
const dateBeforeOneMonth = new Date(currentDate);
dateBeforeOneMonth.setMonth(oneMonthAgo);

currentDate.setHours(23);
currentDate.setMinutes(59);
currentDate.setSeconds(59);
currentDate.setMilliseconds(999);

export const initialDateRange = [
  {
    startDate: dateBeforeOneMonth,
    endDate: currentDate,
    key: "selection",
  },
];

export const initialFilter = {
  carNames: [],
  carLines: [],
  provinces: [],
  statuses: [],
};
