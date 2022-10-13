import { useState } from 'react';

import addZeroToNumber from '@/lib/util/addZeroToNumber';

const today = new Date();

const useTimePicker = (time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`) => {
  const [h, m] = time.split(':');
  const AM_PM: 'AM' | 'PM' = +h < 12 ? 'AM' : 'PM';

  const [hourType, setHourType] = useState<'AM' | 'PM'>(AM_PM);
  const [hour, setHour] = useState<string>(addZeroToNumber(h));
  const [minute, setMinute] = useState<string>(addZeroToNumber(m));

  return { hourType, setHourType, hour, setHour, minute, setMinute };
};

export default useTimePicker;
