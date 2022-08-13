import React from 'react';

import * as Styled from './style';

export interface InputProps {
  type: 'text';
  id: string;
  name: string;
  width: number;
  height: number;
  value: string;
  maxLength?: number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, name, width, height, value, maxLength, placeholder, onChange }: InputProps) => {
  return (
    <Styled.Wrapper
      type={type}
      id={id}
      name={name}
      width={width}
      height={height}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);
