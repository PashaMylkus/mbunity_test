import { css, cx } from "@kuma-ui/core";

type LogoProps = {
  isWhite?:boolean | undefined
  className?:string
}
export const Logo = ({isWhite, className} : LogoProps): JsxElement => {
  return <div className={cx(mainClass, isWhite && whiteClass, className) }>Logo Here </div>;
};

const mainClass = css`
    color: rgb(0, 0, 0);
    font-family: var(--font-inter);
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
    letter-spacing: 0%;
`
const whiteClass = css`
    color: #fff;

`