import React, { useState, useCallback } from 'react';
import moment, { Moment } from 'moment';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import {
  Container,
  InnerContainer,
  MonthSelectorContainer,
  IconWrapper,
  Table,
  WeekListContainer,
  DateWrapper,
} from './style';

const Calendar = () => {
  const weekList: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const [getMoment, setMoment] = useState<Moment>(moment());
  const [selectedMonth, setSelectedMonth] = useState<number>(Number(getMoment.format('M')));

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const isWeekend = (day: Moment) => {
    const [dayOfTheWeek, _] = day.toString().split(' ');
    return dayOfTheWeek === 'Sat' || dayOfTheWeek === 'Sun';
  };

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

  const calendarArr = useCallback(() => {
    const result = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result.push(
        <WeekListContainer key={week}>
          {Array(7)
            .fill(0)
            .map((_, index) => {
              const day = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
              const date: number = Number(day.format('D'));

              return (
                <DateWrapper>
                  <Text fontSize={10} lineHeight={15}>
                    {isCurrentMonth(Number(day.format('M')), selectedMonth) && date}
                  </Text>
                </DateWrapper>
              );
            })}
        </WeekListContainer>,
      );
    }

    return result;
  }, [firstWeek]);

  return (
    <Container>
      <InnerContainer>
        <Text fontSize={10}>{getMoment.weekYear()}</Text>
        <MonthSelectorContainer>
          <IconWrapper onClick={onClickPrev}>
            <Icon icon="Arrow" rotate={90} />
          </IconWrapper>
          <Text fontSize={14}>{selectedMonth}월</Text>
          <IconWrapper onClick={onClickNext}>
            <Icon icon="Arrow" rotate={270} />
          </IconWrapper>
        </MonthSelectorContainer>
        <Table>
          <tbody>
            <WeekListContainer>
              {weekList.map((week, index) => (
                <Text
                  key={index}
                  fontSize={10}
                  fontWeight={700}
                  lineHeight={15}
                  color={index === 0 ? Theme.W_1 : Theme.M_1}
                >
                  {week}
                </Text>
              ))}
            </WeekListContainer>
            {calendarArr()}
          </tbody>
        </Table>
      </InnerContainer>
    </Container>
  );
};

export default Calendar;
