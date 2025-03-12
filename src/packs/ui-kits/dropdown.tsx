import { ReactNode } from 'react';

interface DropdownProps {
  label: string;
  children: ReactNode[] | ReactNode;
  position?: 'left' | 'right';
}

export default function Dropdown({ label, children, position = 'left' }: DropdownProps) {
  return (
    <div className="relative inline-block text-left group">
      <button className="hover:font-bold transition">{label}</button>

      <div
        className={`absolute p-2 mt-2 w-max bg-white border rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
          position === 'right' ? 'right-0' : 'left-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
