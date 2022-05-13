import React from 'react';

import { StyledInput } from './style';

export interface InputProps {
  type: 'text';
  id: string;
  name: string;
  width: number;
  height: number;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, name, width, height, value, placeholder, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      width={width}
      height={height}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
