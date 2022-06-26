export const yearList = Array.from({ length: 10 }, (_, idx) => `${idx + new Date().getFullYear()}`);

export const monthList = Array.from({ length: 12 }, (_, idx) => (idx < 9 ? `0${idx + 1}` : `${idx + 1}`));

export const dateList = Array.from({ length: 31 }, (_, idx) => (idx < 9 ? `0${idx + 1}` : `${idx + 1}`));

export const amHourList = Array.from({ length: 12 }, (_, idx) => (idx < 10 ? `0${idx}` : `${idx}`));

export const pmHourList = Array.from({ length: 12 }, (_, idx) => `${idx + 12}`);

export const minuteList = Array.from({ length: 12 }, (_, idx) => (idx * 5 < 10 ? `0${idx * 5}` : `${idx * 5}`));

export const sortMethodList = ['마감 기한 순', '가나다 순', 'Task 개수 순'];
