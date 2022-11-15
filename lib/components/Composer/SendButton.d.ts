import React from 'react';
interface SendButtonProps {
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    buttonColor?: string;
}
export declare const SendButton: ({ disabled, onClick, buttonColor }: SendButtonProps) => JSX.Element;
export {};
