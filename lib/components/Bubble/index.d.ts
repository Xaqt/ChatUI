import React from 'react';
export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: string;
    content?: React.ReactNode;
    backgroundColor?: string;
    color?: string;
}
export declare const Bubble: (props: BubbleProps) => JSX.Element;
