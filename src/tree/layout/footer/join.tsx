import { css } from '@kuma-ui/core';

export const Join = (): JsxElement => {
  return (
    <div className={mainClass}>
      <div className={headerClass}>Join Our Newsletter</div>
      <div className="flex justify-between w-full h-[39px] rounded-[4px] overflow-hidden">
        <input placeholder="Your email address" className={inputClass} type="email" />
        <button className={buttonClass}>Subscribe</button>
      </div>
      <div className={descClass}>* Will send you weekly updates for your better tool management.</div>
    </div>
  );
};

const mainClass = css`
  width: 304px;
  height: 184px;
  border-radius: 10px;
  padding: 14px;
  background: rgb(19, 19, 19);
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
const headerClass = css`
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
`;
const descClass = css`
  color: #898989;
  font-family: var(--font-manrope);
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;
const buttonClass = css`
  all: unset;
  width: 105px;
  height: 100%;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-popins);
  font-size: 12px;
  font-weight: 500;
`;
const inputClass = css`
  all: unset;
  flex: 2;
  color: #fff;
  font-family: var(--font-popins);
  font-size: 11px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0%;
  text-align: left;
  background: rgb(30, 30, 30);
  height: 100%;
  padding: 0px 10px;
`;
