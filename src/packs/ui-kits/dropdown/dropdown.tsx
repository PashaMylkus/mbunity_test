'use client';

import { useState } from 'react';
import { ReactNode } from 'react';
import ArrowIcon from './arrow.svg';

interface DropdownProps {
  label: ReactNode | string;
  children: ReactNode[] | ReactNode;
  position?: 'left' | 'right';
}

export default function Dropdown({ label, children, position = 'left' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="hover:font-bold transition flex items-center gap-[5px]" onClick={toggleDropdown}>
        {label}
        <ArrowIcon className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      <div
        className={`absolute p-2 mt-2 w-max bg-white border rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
          position === 'right' ? 'right-0' : 'left-0'
        } ${isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
      >
        {children}
      </div>
    </div>
  );
}
