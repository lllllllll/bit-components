import React from 'react';
import './button.scss'

export type ButtonProps = {
  text: string,
  color?: 'secondary',
};

export function Button({ text, color }: ButtonProps) {
  return (
    <button className={color && 'secondary'}>{text}</button>
  );
}
