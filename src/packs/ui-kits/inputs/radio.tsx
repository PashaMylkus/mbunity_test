import { css, cx } from '@kuma-ui/core';
import CheckIcon from './check.svg';

type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
};

export const Radio = ({ label, name, value, checked, onChange, className }: RadioProps) => {
  return (
    <label className={cx(radioWrapper, className)}>
      <input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(value)} className="hidden" />

      {checked ? (
        <span className={radioChecked}>
          <CheckIcon />
        </span>
      ) : (
        <span className={radioCircle}></span>
      )}

      <span className={radioLabel}>{label}</span>
    </label>
  );
};

const radioWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const radioCircle = css`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(224, 224, 224);
`;

const radioChecked = css`
  width: 13px;
  height: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const radioLabel = css`
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;

  user-select: none;
  cursor: pointer;
`;
