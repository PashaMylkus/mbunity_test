import { css } from '@kuma-ui/core';
import { Drawer } from '@material-tailwind/react';
import CloseIcon from '@/tree/layout/assets/close.svg';
import { Logo } from './logo';
import { NavItems } from './nav-items';
import UserIcon from '@/tree/layout/assets/user-white.svg';
import CartIcon from '@/tree/layout/assets/cart-white.svg';

type MobileDrawerProps = {
  isOpen: boolean;
  close: () => void;
};

export const MobileDrawer = ({ isOpen, close }: MobileDrawerProps): JsxElement => {
  return (
    <Drawer
      size={1000}
      placement="top"
      open={isOpen}
      onClose={close}
      className={drawerClass}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className={drawerHeader}>
        <Logo isWhite />
        <CloseIcon onClick={close} className={closeIconClass} />
      </div>

      <div className={navClass}>
        <NavItems close={close} />
      </div>
      <div className="flex items-center gap-[30px] fixed bottom-10 left-2/4 -translate-x-1/2 justify-center">
        <button className={buttonClass}>
          <UserIcon />
        </button>
        <button className={buttonClass}>
          <CartIcon />
        </button>
      </div>
    </Drawer>
  );
};
const buttonClass = css`
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  height: 31px;
  width: 31px;
`;

const navClass = css`
  display: flex;
  gap: 37px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
`;
const drawerHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 57px;
`;

const closeIconClass = css`
  height: 24px;
`;
const drawerClass = css`
  padding: 32px 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  height: 100vh !important;
  z-index: 1000;
`;
