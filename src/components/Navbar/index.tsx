import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '../IconButton';

export type NavbarProps = {
  title: string;
  subtitle: string;
  className?: string;
  logo?: string;
  leftContent?: IconButtonProps;
  rightContent?: IconButtonProps[];
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className, title, subtitle, logo, leftContent, rightContent = [] } = props;
  return (
    <header className={clsx('Navbar', className)}>
      {/* <div className="Navbar-left">{leftContent && <IconButton size="lg" {...leftContent} />}</div>
      <div className="Navbar-main">
        {logo && <img className="Navbar-logo" src={logo} alt={title} />}
        <h2 className="Navbar-title">{title}</h2>
        <p className="Navbar-subtitle">Hello world {subtitle}</p>
      </div>
      <div className="Navbar-right">
        {rightContent.map((item) => (
          <IconButton size="lg" {...item} key={item.icon} />
        ))}
      </div> */}
    </header>
  );
};
