import { css } from "@kuma-ui/core";

export const Logo = (): JsxElement => {
  return <div className={mainClass}>Logo Here </div>;
};

const mainClass = css`
    color: rgb(0, 0, 0);
    font-family: var(--font-inter);
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
    letter-spacing: 0%;
`