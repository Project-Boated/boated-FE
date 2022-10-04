import React, { useState, useEffect, useMemo, useCallback } from 'react';

import moment, { Moment } from 'moment';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface CalendarProps {
  date: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const Calendar = ({ date, setYear, setMonth, setDate }: CalendarProps) => {
  const [isOnMount, setIsOnMount] = useState<boolean>(false);

  const weekList: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const [getMoment, setMoment] = useState<Moment>(moment());
  const [selectedMonth, setSelectedMonth] = useState<number>(Number(getMoment.format('M')));

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const year = useMemo(() => getMoment.weekYear(), [getMoment.weekYear()]);

  const isCurrentMonth = (currentMonth: number, selectedMonth: number) => currentMonth === selectedMonth;

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

  const onClickDay = useCallback((date: number) => setDate(date < 10 ? `0${date}` : `${date}`), []);

  const calendarArr = useCallback(() => {
    const result = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result.push(
        <Styled.WeekListContainer key={week}>
          {Array(7)
            .fill(0)
            .map((_, index) => {
              const day = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
              const year = Number(day.format('Y'));
              const month = Number(day.format('M'));
              const calendarDate = Number(day.format('D'));

              return (
                <Styled.DateWrapper
                  key={`${year}-${month}-${calendarDate}`}
                  isClicked={calendarDate === +date}
                  onClick={() => onClickDay(calendarDate)}
                >
                  <Text color={calendarDate === +date ? Theme.S_0 : Theme.M_1} fontSize={10} lineHeight={15}>
                    {isCurrentMonth(Number(day.format('M')), selectedMonth) && calendarDate}
                  </Text>
                </Styled.DateWrapper>
              );
            })}
        </Styled.WeekListContainer>,
      );
    }

    return result;
  }, [firstWeek, date]);

  useEffect(() => {
    setYear(`${getMoment.weekYear()}`);
  }, [getMoment.weekYear()]);

  useEffect(() => {
    setMonth(selectedMonth < 10 ? `0${selectedMonth}` : `${selectedMonth}`);
  }, [selectedMonth]);

  useEffect(() => {
    setIsOnMount(true);
  }, [isOnMount]);

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.MonthSelectorContainer>
          <Icon icon="Arrow" rotate={90} isButton onClick={onClickPrev} />
          {/* <Text fontSize={10}>{year}</Text> */}
          <Text fontSize={14}>{selectedMonth}월</Text>
          <Icon icon="Arrow" rotate={270} isButton onClick={onClickNext} />
        </Styled.MonthSelectorContainer>
        {isOnMount && (
          <Styled.Table>
            <Styled.Tbody>
              <Styled.WeekListContainer>
                {weekList.map((week, index) => (
                  <Styled.Td key={week}>
                    <Text
                      key={week}
                      fontSize={10}
                      fontWeight={700}
                      lineHeight={15}
                      color={index === 0 ? Theme.W_1 : Theme.M_1}
                    >
                      {week}
                    </Text>
                  </Styled.Td>
                ))}
              </Styled.WeekListContainer>
              {calendarArr()}
            </Styled.Tbody>
          </Styled.Table>
        )}
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Calendar;
