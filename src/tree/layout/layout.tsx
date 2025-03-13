import { css } from '@kuma-ui/core';
import { Navbar } from './header/navbar';
import { Footer } from './footer/footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JsxElement => {
  return (
    <main className={mainClass}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

const mainClass = css`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 100%;
`;
