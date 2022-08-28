export interface DropDownSize {
  type: 'size-357' | 'size-264' | 'size-176' | 'size-110' | 'size-88' | 'size-72' | 'size-47';
  borderRadius?: number;
}

export interface SizeProps {
  width?: number;
  height?: number;
  borderRadius?: number;
}

export interface LayoutProps {
  borderRadius?: number;
  backgroundColor?: string;
  boxShadow?: string;
}

export interface FontSizeProps {
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
}

export interface CircleTextProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
}
