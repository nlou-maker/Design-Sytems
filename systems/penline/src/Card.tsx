import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, style, ...props }) => (
  <div
    style={{
      backgroundColor: 'var(--color-paper-alt)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-5)',
      boxShadow: `0 2px 8px var(--color-shadow)`,
      transition: `all var(--transition)`,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
