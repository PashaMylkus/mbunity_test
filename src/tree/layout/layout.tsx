import { css } from '@kuma-ui/core';
import { Navbar } from './header/navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JsxElement => {
  return (
    <main className={mainClass}>
      <Navbar />
      {children}
    </main>
  );
};

const mainClass = css`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 100%;
`;
