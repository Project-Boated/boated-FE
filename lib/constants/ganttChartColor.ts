import { ThemeOption } from '@/types/common';

import Theme from '@/styles/Theme';

const ganttChartColorOptionList: ThemeOption[] = Object.keys(Theme) as ThemeOption[];

const ganttChartColor = ganttChartColorOptionList.map((key) => Theme[key]);

export default ganttChartColor;
