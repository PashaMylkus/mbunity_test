import { css } from '@kuma-ui/core';
import PhoneIcon from '@/tree/assets/phone.svg';
import EmailIcon from '@/tree/assets/email.svg';
import LocationIcon from '@/tree/assets/location.svg';
import TwiterIcon from '@/tree/contact-us/assets/twiter.svg';
import InstIcon from '@/tree/contact-us/assets/inst.svg';
import DiscordIcon from '@/tree/contact-us/assets/discord.svg';

export const InfoBlock = (): JsxElement => {
  return (
    <div className={mainClass}>
      <div className="flex flex-col items-start gap-[3px]">
        <div className="text-[28px] font-semibold">Contact Information</div>
        <div className="text-[rgb(201,_201,_201)] text-[18px] font-normal">Say something to start a live chat!</div>
      </div>
      <div className="flex flex-col items-start justify-between gap-[50px]">
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
      <div className="flex items-center gap-[24px] pt-[50px]">
        <a className={socialClass}>
          <TwiterIcon />
        </a>
        <a className={socialClass}>
          <InstIcon />
        </a>
        <a className={socialClass}>
          <DiscordIcon />
        </a>
      </div>
      <div className={smallCircleClass}></div>
      <div className={circleClass}></div>
    </div>
  );
};

const socialClass = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background-color: #fff;
    svg {
      path {
        fill: #000;
      }
    }
  }
`;
const smallCircleClass = css`
  background-color: rgba(72, 72, 72, 0.5);
  width: 138px;
  height: 138px;
  border-radius: 50%;
  position: absolute;
  bottom: 70px;
  right: 70px;
  z-index: 1;
`;
const circleClass = css`
  background: rgb(26, 26, 26);
  width: 269px;
  height: 269px;
  border-radius: 50%;
  position: absolute;
  bottom: -80px;
  right: -100px;
  z-index: 0;
`;
const iconClass = css`
  width: 31px;
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

const mainClass = css`
  flex: 1;
  position: relative;
  font-family: var(--font-popins);
  display: flex;
  gap: 111px;
  width: 461px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 10px;
  background: rgb(0, 0, 0);
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 36px;
  padding-top: 40px;
  color: rgb(255, 255, 255);
  overflow: hidden;
`;
