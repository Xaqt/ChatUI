import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '../IconButton';

export type NavbarProps = {
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

export const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    className,
    title,
    subtitle,
    logo,
    leftContent,
    bgColor,
    textColor,
    placeholderBgColor,
    placeholderTextColor,
    placeholder,
    rightContent = [],
  } = props;
  return (
    <>
      <header className={clsx('Navbar', className)} style={{ backgroundColor: bgColor }}>
        <div className="Navbar-left">
          {leftContent && <IconButton size="lg" {...leftContent} />}
        </div>
        <div className="Navbar-main">
          {logo && <img className="Navbar-logo" src={logo} alt={title} />}
          <h2 className="Navbar-title" style={{ color: textColor, fontWeight: 'bold' }}>
            {title}
          </h2>
          <p className="Navbar-subtitle" style={{ color: textColor }}>
            {subtitle}
          </p>
        </div>
        <div className="Navbar-right">
          {rightContent.map((item) => (
            <IconButton size="lg" {...item} key={item.icon} />
          ))}
        </div>
      </header>
      {placeholder && (
        <div className="Navbar-placeholder" style={{ backgroundColor: placeholderBgColor }}>
          <p style={{ color: placeholderTextColor }}>{placeholder}</p>
        </div>
      )}
    </>
  );
};
