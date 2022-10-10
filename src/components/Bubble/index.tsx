import React from 'react';

export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
  content?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

export const Bubble = (props: BubbleProps) => {
  const { type = 'text', content, children, backgroundColor, color, ...other } = props;
  return (
    <div
      className={`Bubble ${type}`}
      data-type={type}
      {...other}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {content && <p>{content}</p>}
      {children}
    </div>
  );
};
