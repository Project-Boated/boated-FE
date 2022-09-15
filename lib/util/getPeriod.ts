import parseStrArrToNumArr from './parseStrArrToNumArr';

interface GetPeriodProps {
  year: number;
  month: number;
  creationDate: string;
  deadline: string;
  daysOfMonth: number;
}

const getPeriod = ({ year, month, creationDate, deadline, daysOfMonth }: GetPeriodProps) => {
  const [createdAt] = creationDate.split(' ');
  const [createdYear, createdMonth, createdDate]: number[] = parseStrArrToNumArr(createdAt.split('-'));

  const [deadlineAt] = deadline.split(' ');
  const [deadlineYear, deadlineMonth, deadlineDate]: number[] = parseStrArrToNumArr(deadlineAt.split('-'));

  let left = 0;
  let period = 0;

  // 생성년도 < 현재년도 < 마감년도
  if (year > createdYear && year < deadlineYear) {
    left = 0;
    period = daysOfMonth;
  }

  // 생성년도 < 현재년도 === 마감년도
  if (year > createdYear && year === deadlineYear) {
    // 현재 월 < 마감 월
    if (month < deadlineMonth) {
      left = 0;
      period = daysOfMonth;
    }

    // 현재 월 === 마감 월
    if (month === deadlineMonth) {
      left = 0;
      period = deadlineDate;
    }
  }

  // 생성년도 === 현재년도 < 마감년도
  if (year === createdYear && year < deadlineYear) {
    // 생성 월 === 현재 월
    if (month === createdMonth) {
      left = (createdDate - 1) * 51;
      period = daysOfMonth - createdDate + 1;
    }

    // 현재 월 < 생성 월
    if (month > createdMonth) {
      left = 0;
      period = daysOfMonth;
    }
    // left = 0;
    // period = daysOfMonth;
    // chk = 4;
  }

  // 생성년도 === 현재년도 === 마감년도
  if (year === createdYear && year === deadlineYear) {
    // 현재 월 < 마감 월
    if (month < deadlineMonth) {
      left = (createdDate - 1) * 51;
      period = daysOfMonth - createdDate + 1;
    }

    // 현재 월 === 마감 월 === 생성 월
    if (month === deadlineMonth && deadlineMonth === createdMonth) {
      left = (createdDate - 1) * 51;
      period = deadlineDate - createdDate + 1;
    }

    // 현재 월 === 마감 월 !== 생성 월

    if (month === deadlineMonth && deadlineMonth !== createdMonth) {
      left = 0;
      period = deadlineDate;
    }
  }

  return { left, period };
};

export default getPeriod;
