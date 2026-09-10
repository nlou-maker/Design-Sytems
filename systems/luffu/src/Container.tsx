import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  background?: 'parchment' | 'linen' | 'white';
  padding?: 'sm' | 'md' | 'lg';
  maxWidth?: string;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  background = 'parchment',
  padding = 'md',
  maxWidth = 'var(--page-max-width)',
  className = '',
}) => {
  const backgroundMap = {
    parchment: 'var(--color-parchment)',
    linen: 'var(--color-linen)',
    white: 'var(--color-white)',
  };

  const paddingMap = {
    sm: 'var(--spacing-24)',
    md: 'var(--spacing-32)',
    lg: 'var(--spacing-123)',
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: backgroundMap[background],
        padding: paddingMap[padding],
        maxWidth,
        margin: '0 auto',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};
