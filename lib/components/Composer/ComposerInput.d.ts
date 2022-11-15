import React from 'react';
import { InputProps } from '../Input';
interface ComposerInputProps extends InputProps {
    invisible: boolean;
    inputRef: React.MutableRefObject<HTMLTextAreaElement>;
    onImageSend?: (file: File) => Promise<any>;
    isDisabled?: boolean;
}
export declare const ComposerInput: ({ inputRef, invisible, onImageSend, isDisabled, ...rest }: ComposerInputProps) => JSX.Element;
export {};
