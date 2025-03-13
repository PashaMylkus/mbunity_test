import { css, cx } from '@kuma-ui/core';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled, className, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cx(baseButton, variantStyles[variant], sizeStyles[size], disabled && disabledStyle, className)}
      {...props}
    >
      {children}
    </button>
  );
};

const baseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  text-align: center;
  border: none;
  font-family: var(--font-popins);
  font-size: 16px;
  font-weight: 500;
`;

const variantStyles = {
  primary: css`
    border-radius: 5px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.12);
    background: rgb(0, 0, 0);
    color: #fff;
    &:hover {
      background: rgb(55, 55, 55);
    }
  `,
  secondary: css`
    background: #ff4081;
    color: white;
    &:hover {
      background: #e0005a;
    }
  `,
  outline: css`
    background: transparent;
    color: #0070f3;
    border: 2px solid #0070f3;
    &:hover {
      background: #0070f3;
      color: white;
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 15px 48px 15px 48px;
    font-size: 16px;
  `,
  lg: css`
    padding: 14px 20px;
    font-size: 18px;
  `,
};

const disabledStyle = css`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
`;
