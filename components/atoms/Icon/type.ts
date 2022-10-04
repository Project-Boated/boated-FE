import * as Icons from './Icons';

export type IconOption = keyof typeof Icons;

export interface IconWrapperProps {
  width?: number;
  height?: number;
  rotate?: number;
  isButton?: boolean;
  onClick?: () => void;
}

export interface IconProps extends IconWrapperProps {
  icon: IconOption;
  color?: string;
  onClick?: () => void;
}

export interface IconPropsWithSVGProps extends React.SVGProps<SVGElement> {
  color?: string;
}
