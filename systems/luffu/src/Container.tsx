import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '1200px',
  style,
  ...props
}) => (
  <div
    style={{
      maxWidth,
      margin: '0 auto',
      padding: '0 var(--spacing-16)',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
