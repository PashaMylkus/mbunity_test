import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps): JsxElement => {
  return <div className={`w-full max-w-[1200px] ${className}`}>{children}</div>;
};
