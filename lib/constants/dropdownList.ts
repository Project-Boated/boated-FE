export const yearList = Array.from({ length: 10 }, (_, idx) => `${idx + new Date().getFullYear()}`);

export const monthList = Array.from({ length: 12 }, (_, idx) => `${idx + 1}`);

export const dateList = Array.from({ length: 31 }, (_, idx) => `${idx + 1}`);

export const amHourList = Array.from({ length: 12 }, (_, idx) => (idx < 10 ? `0${idx}` : `${idx}`));

export const pmHourList = Array.from({ length: 12 }, (_, idx) => `${idx + 12}`);

export const minuteList = Array.from({ length: 12 }, (_, idx) => (idx * 5 < 10 ? `0${idx * 5}` : `${idx * 5}`));
