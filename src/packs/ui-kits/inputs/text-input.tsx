import { css, cx } from '@kuma-ui/core';

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  type?: string;
};

export const TextInput = ({ label, value, onChange, className, placeholder, type = 'text', ...props }: TextInputProps): JsxElement => {
  return (
    <label className={cx(mainClass, value && activeClass)}>
      <div>{label}</div>
      <input
        placeholder={placeholder}
        className={cx(inputClass, className)}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </label>
  );
};

const inputClass = css`
  all: unset;
  width: 100%;
  border-bottom: 1px solid rgb(141, 141, 141);
  padding-bottom: 5px;
  &:focus {
    color: black;
    border-bottom-color: black;
  }
`;
const mainClass = css`
  width: 100%;

  color: rgb(141, 141, 141);
  font-family: var(--font-popins);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;
const activeClass = css`
  color: black; /* Змінюємо колір тексту мітки, коли є введене значення */
`;
