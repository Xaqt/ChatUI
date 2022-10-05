import React from 'react';
import { IDate } from './parser';

export interface TimeProps {
  date: IDate;
}

export const Time: React.FC<TimeProps> = ({ date }) => {
  return (
    <time className="Time" dateTime={new Date(date).toJSON()}>
      {new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short',
      })}
    </time>
  );
};
