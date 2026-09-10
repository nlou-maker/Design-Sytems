import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles: Record<'primary' | 'secondary' | 'ghost', React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-signal)',
    color: 'var(--color-paper-hi)',
    border: 'none',
  },
  secondary: {
    backgroundColor: 'var(--color-paper-alt)',
    color: 'var(--color-ink)',
    border: `var(--stroke-thin) solid var(--color-hatch-line)`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-signal)',
    border: `var(--stroke-thin) solid var(--color-signal)`,
  },
};

const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
  sm: {
    padding: `var(--spacing-1) var(--spacing-3)`,
    fontSize: '14px',
  },
  md: {
    padding: `var(--spacing-2) var(--spacing-4)`,
    fontSize: '16px',
  },
  lg: {
    padding: `var(--spacing-3) var(--spacing-5)`,
    fontSize: '18px',
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...props
}) => (
  <button
    style={{
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      lineHeight: 1.4,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: `all var(--transition)`,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);
