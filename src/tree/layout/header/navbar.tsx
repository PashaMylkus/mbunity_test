import { css } from '@kuma-ui/core';
import { Logo } from './logo';
import Link from 'next/link';
import Dropdown from '@/packs/ui-kits/dropdown';
import UserIcon from '../assets/user.svg';
import CartIcon from '../assets/cart.svg';

const nav_items = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Features',
    sub: [
      {
        name: 'feature 1',
        url: '/feature1',
      },
      {
        name: 'feature 2',
        url: '/feature1',
      },
    ],
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Shop',
    url: '/shop',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

export const Navbar = (): JsxElement => {
  return (
    <div className={mainClass}>
      <Logo />
      <nav className={navClass}>
        {nav_items.map((item) => {
          if (item.hasOwnProperty('sub')) {
            return (
              <Dropdown key={item.name} label={item.name}>
                <div className={dropdownItemsClass}>
                  {item.sub?.map((el) => (
                    <Link key={el.name} href={el.url ?? ''}>
                      {el.name}
                    </Link>
                  ))}
                </div>
              </Dropdown>
            );
          }
          return (
            <Link key={item.name} href={item.url ?? ''}>
              {item.name}
            </Link>
          );
        })}
        <div className="flex items-center gap-[30px]">
          <button className={buttonClass}>
            <UserIcon />
          </button>
          <button className={buttonClass}>
            <CartIcon />
          </button>
        </div>
      </nav>
    </div>
  );
};

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
  padding: 41px 10px;
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const navClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 47px;
`;
const dropdownItemsClass = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
