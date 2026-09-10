import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

const variantStyles: Record<'primary' | 'ghost', React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-ember)',
    color: 'var(--color-white)',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    padding: '0 var(--spacing-20)',
    minHeight: '36px',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-ember)',
    border: '1px solid var(--color-ember)',
    borderRadius: 'var(--radius-sm)',
    padding: 'var(--spacing-8) var(--spacing-20)',
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  style,
  ...props
}) => (
  <button
    style={{
      fontFamily: 'var(--font-work-sans)',
      fontSize: 'var(--text-body)',
      fontWeight: 500,
      lineHeight: 1.4,
      cursor: 'pointer',
      ...variantStyles[variant],
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);
