import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  category?: string;
  title?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  image,
  category,
  title,
  description,
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--color-clay)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}
    >
      {image && <div style={{ width: '100%', aspectRatio: '16 / 9' }}>{image}</div>}
      <div style={{ padding: 'var(--card-padding)' }}>
        {category && (
          <p
            style={{
              fontSize: 'var(--text-caption)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-work-sans)',
              marginBottom: 'var(--spacing-12)',
              fontWeight: 500,
            }}
          >
            {category}
          </p>
        )}
        {title && (
          <h3
            style={{
              fontSize: 'var(--text-heading-sm)',
              color: 'var(--color-bark)',
              fontFamily: 'var(--font-fraunces)',
              marginBottom: 'var(--spacing-12)',
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-work-sans)',
              lineHeight: 'var(--leading-body)',
              fontWeight: 400,
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
