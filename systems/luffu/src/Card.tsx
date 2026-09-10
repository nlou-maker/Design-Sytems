import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, style, ...props }) => (
  <div
    style={{
      backgroundColor: 'var(--color-pressed-cotton)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-32)',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
