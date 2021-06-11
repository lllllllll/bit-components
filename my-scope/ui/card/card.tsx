import React from 'react';
import { Button } from '@lllllllll/30hmoob.ui.button';
import './card.scss'

export type CardProps = {
  text: string
  button?: string
};

export function Card({ text, button }: CardProps) {
  return (
    <div className="card">
      <div className="detail">
        {text}
      </div>
      <div className="footer">
        <Button text={button || 'Click'} />
      </div>
    </div>
  );
}
