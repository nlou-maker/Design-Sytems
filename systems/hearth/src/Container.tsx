import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  background?: 'oat' | 'sand' | 'white';
  padding?: 'sm' | 'md' | 'lg';
  maxWidth?: string;
  className?: string;
}

const backgroundMap: Record<'oat' | 'sand' | 'white', string> = {
  oat: 'var(--color-oat)',
  sand: 'var(--color-sand)',
  white: 'var(--color-white)',
};

const paddingMap: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'var(--spacing-24)',
  md: 'var(--spacing-32)',
  lg: 'var(--spacing-96)',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  background = 'oat',
  padding = 'md',
  maxWidth = 'var(--page-max-width)',
  className,
}) => (
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
