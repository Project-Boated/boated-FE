import { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment';

import { dayOfTheWeekObj } from '@/lib/constants';

import { DateProps } from './type';

const useCalendar = () => {
  const [getMoment, setMoment] = useState<Moment>(moment());
  const [selectedMonth, setSelectedMonth] = useState<number>(Number(getMoment.format('M')));

  const [today, setToday] = useState<Moment>(getMoment);
  const [year, setYear] = useState<number>(today.year());
  const [month, setMonth] = useState<number>(today.month() + 1);

  const [calendarList, setCalendarList] = useState<Array<DateProps>>([]);

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const onClickPrev = useCallback(() => {
    setMoment(getMoment.clone().subtract(1, 'month'));
    setSelectedMonth((prev) => {
      if (prev === 1) {
        return 12;
      }
      return prev - 1;
    });
  }, [selectedMonth]);

  const onClickNext = useCallback(() => {
    setMoment(getMoment.clone().add(1, 'month'));
    setSelectedMonth((prev) => {
      if (prev === 12) {
        return 1;
      }
      return prev + 1;
    });
  }, [selectedMonth]);

  useEffect(() => {
    setToday(getMoment);
  }, [getMoment]);

  useEffect(() => {
    setYear(today.year());
    setMonth(today.month() + 1);
  }, [today]);

  useEffect(() => {
    const result: Array<DateProps> = [];

    for (let week = firstWeek; week <= lastWeek; week++) {
      for (let i = 0; i < 7; i++) {
        const day = today.clone().startOf('year').week(week).startOf('week').add(i, 'day');
        const month: number = +day.format('M');
        const date: number = +day.format('D');
        const dayOfTheWeek: string = dayOfTheWeekObj[day.day() as keyof typeof dayOfTheWeekObj];

        if (month !== selectedMonth) continue;

        result.push({
          date,
          dayOfTheWeek,
        });
      }
    }

    setCalendarList(result);
  }, [firstWeek]);

  return {
    year,
    month,
    calendarList,
    onClickPrev,
    onClickNext,
  };
};

export default useCalendar;
