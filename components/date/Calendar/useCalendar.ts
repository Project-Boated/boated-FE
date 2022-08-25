import { useState } from 'react';

import addZeroToNumber from '@/lib/util/addZeroToNumber';

const today = new Date();

const useCalendar = (calendar: string = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`) => {
  const [y, m, d] = calendar.split('-');

  const [year, setYear] = useState<string>(addZeroToNumber(y));
  const [month, setMonth] = useState<string>(addZeroToNumber(m));
  const [date, setDate] = useState<string>(addZeroToNumber(d));

  return { year, setYear, month, setMonth, date, setDate };
};

export default useCalendar;
