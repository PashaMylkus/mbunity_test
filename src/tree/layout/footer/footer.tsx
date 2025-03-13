import { Container } from '@/packs/ui-kits/container/container';
import { Logo } from '../header/logo';
import { css } from '@kuma-ui/core';
import PhoneIcon from '@/tree/assets/phone.svg';
import EmailIcon from '@/tree/assets/email.svg';
import LocationIcon from '@/tree/assets/location.svg';
import { Join } from './join';

export const Footer = (): JsxElement => {
  return (
    <div className="w-full h-max bg-black">
      <Container className="max-w-[1280px] mx-auto flex flex-col">
        <div className={logoClass}>
          <Logo isWhite className="text-[36px]" />
        </div>

        <div className="px-[20px] py-[30px] flex gap-[40px] flex-wrap lg:flex-nowrap">
          <div className={`${colClass} !flex-2`}>
            <div className={titleClass}>Reach us</div>
            <div className={infoItemClass}>
              <PhoneIcon className={iconClass} />
              <a href="tel:+1012 3456 789">+1012 3456 789</a>
            </div>
            <div className={infoItemClass}>
              <EmailIcon className={iconClass} />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </div>
            <div className={infoItemClass}>
              <LocationIcon className={iconClass} />
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </div>
          </div>

          <div className={colClass}>
            <div className={titleClass}>Company</div>
            <a className={infoItemClass} href="#">
              About
            </a>
            <a className={infoItemClass} href="#">
              Contact
            </a>
            <a className={infoItemClass} href="#">
              Blogs
            </a>
          </div>

          <div className={colClass}>
            <div className={titleClass}>Legal</div>
            <a className={infoItemClass} href="#">
              Privacy Policy
            </a>
            <a className={infoItemClass} href="#">
              Terms & Services
            </a>
            <a className={infoItemClass} href="#">
              Terms of Use
            </a>
            <a className={infoItemClass} href="#">
              Refund Policy
            </a>
          </div>

          <div className={colClass}>
            <div className={titleClass}>Quick Links</div>
            <a className={infoItemClass} href="#">
              Techlabz Keybox
            </a>
            <a className={infoItemClass} href="#">
              Downloads
            </a>
            <a className={infoItemClass} href="#">
              Forum
            </a>
          </div>

          <Join />
        </div>
      </Container>
    </div>
  );
};

const colClass = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  flex: 1;
`;
const logoClass = css`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 45px;
  border-bottom: 1px solid #fff;
`;
const infoItemClass = css`
  display: flex;
  align-items: flex-start;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  gap: 25px;
`;

const iconClass = css`
  width: 31px;
`;
const titleClass = css`
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
`;
