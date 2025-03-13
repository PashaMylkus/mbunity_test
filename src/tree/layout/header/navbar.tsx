'use client';
import { css } from '@kuma-ui/core';
import { Logo } from './logo';
import UserIcon from '@/tree/layout/assets/user.svg';
import CartIcon from '@/tree/layout/assets/cart.svg';
import { MobileDrawer } from './mobile-drawer';
import { useState } from 'react';
import MenuIcon from '@/tree/layout/assets/menu.svg';
import { NavItems } from './nav-items';

export const Navbar = (): JsxElement => {
  const [isOpen, open] = useState<boolean>(false);
  const openDrawer = () => open(true);
  const closeDrawer = () => open(false);

  return (
    <div className={mainClass}>
      <nav className={mainNavClass}>
        <Logo />

        <div className={navClass}>
          <NavItems />
          <div className="flex items-center gap-[30px]">
            <button className={buttonClass}>
              <UserIcon />
            </button>
            <button className={buttonClass}>
              <CartIcon />
            </button>
          </div>
        </div>
      </nav>
      <div className={openDrawerButtonClass} onClick={openDrawer}>
        <MenuIcon />
      </div>
      <MobileDrawer isOpen={isOpen} close={closeDrawer} />
    </div>
  );
};

const openDrawerButtonClass = css`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
const mainNavClass = css`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const buttonClass = css`
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
`;
const mainClass = css`
  padding: 41px 10px 0 10px;
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const navClass = css`
  color: rgb(31, 31, 31);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 47px;
  @media (max-width: 800px) {
    display: none;
  }
`;
