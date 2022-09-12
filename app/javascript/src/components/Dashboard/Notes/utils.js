import dayjs from "src/lib/dayjs";

export const calculateCreatedAgo = date => dayjs(date).fromNow();

export const convertDateToWeekdayTime = date =>
  dayjs(date).format("dddd, hh:mmA");
