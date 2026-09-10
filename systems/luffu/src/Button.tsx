import React from 'react';
import '../styles/variables.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-abc-arizona-sans text-base font-normal transition-colors';

  const variants = {
    primary: 'bg-deep-ink text-white px-5 py-0 rounded-sm hover:bg-opacity-90',
    ghost: 'bg-white text-deep-ink border border-deep-ink px-4 py-1 rounded-md hover:bg-gray-50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        backgroundColor: variant === 'primary' ? 'var(--color-deep-ink)' : 'var(--color-white)',
        color: variant === 'primary' ? 'var(--color-white)' : 'var(--color-deep-ink)',
        borderRadius: variant === 'primary' ? '4px' : '6px',
        padding: variant === 'primary' ? '0 20px' : '4px 18px',
        border: variant === 'ghost' ? '1px solid var(--color-deep-ink)' : 'none',
        fontFamily: 'var(--font-abc-arizona-sans)',
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '-0.32px',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};
