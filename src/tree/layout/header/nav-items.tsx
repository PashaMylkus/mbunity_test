'use client';
import Dropdown from '@/packs/ui-kits/dropdown/dropdown';
import { css, cx } from '@kuma-ui/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export const NavItems = (): JsxElement => {
  const pathname = usePathname();

  return (
    <>
      {nav_items.map((item) => {
        if (item.hasOwnProperty('sub')) {
          return (
            <Dropdown key={item.name} label={<div className={cx(linkClass)}>{item.name}</div>}>
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
          <Link className={cx(pathname === item.url && activeLinkClass, linkClass)} key={item.name} href={item.url ?? ''}>
            {item.name}
          </Link>
        );
      })}
    </>
  );
};
const linkClass = css`
  font-family: var(--font-roboto);
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const activeLinkClass = css`
  /* color: rgb(0, 0, 0); */
  font-weight: 600;
`;
const dropdownItemsClass = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
