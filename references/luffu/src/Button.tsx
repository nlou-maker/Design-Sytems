import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

const variantStyles: Record<'primary' | 'ghost', React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-deep-ink)',
    color: 'var(--color-white)',
    border: 'none',
    borderRadius: '4px',
    padding: '0 var(--spacing-20)',
    minHeight: '32px',
  },
  ghost: {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-deep-ink)',
    border: '1px solid var(--color-deep-ink)',
    borderRadius: '6px',
    padding: 'var(--spacing-4) var(--spacing-18)',
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
      fontFamily: 'var(--font-abc-arizona-sans)',
      fontSize: 'var(--text-body)',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-body)',
      lineHeight: 1.2,
      cursor: 'pointer',
      ...variantStyles[variant],
      ...style,
    }}
    {...props}
  >
    {children}
  </button>
);
