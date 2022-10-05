import React from 'react';
import { IconButtonProps } from '../IconButton';
export declare type NavbarProps = {
    title: string;
    subtitle?: string;
    className?: string;
    logo?: string;
    bgColor?: string;
    textColor?: string;
    placeholderBgColor?: string;
    placeholderTextColor?: string;
    leftContent?: IconButtonProps;
    rightContent?: IconButtonProps[];
    placeholder?: string;
};
export declare const Navbar: React.FC<NavbarProps>;
