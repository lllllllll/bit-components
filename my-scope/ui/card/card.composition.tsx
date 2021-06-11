import React from 'react';
import { Card } from './card';

export const BasicCard = () => (
  <Card text="hello from Card" />
);

export const CardButton = () => (
  <Card text="Component usage Card" button="button" />
);
