import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  category?: string;
  title?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  image,
  category,
  title,
  description,
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--color-pressed-cotton)',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      {image && (
        <div style={{ width: '100%', aspectRatio: '16 / 9' }}>
          {image}
        </div>
      )}
      <div style={{ padding: 'var(--spacing-32)' }}>
        {category && (
          <p
            style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              color: 'var(--color-slate)',
              fontFamily: 'var(--font-abc-arizona-sans)',
              letterSpacing: '-0.35px',
              marginBottom: 'var(--spacing-16)',
              fontWeight: 400,
            }}
          >
            {category}
          </p>
        )}
        {title && (
          <h3
            style={{
              fontSize: '20px',
              color: 'var(--color-graphite)',
              fontFamily: 'var(--font-abc-arizona-sans)',
              letterSpacing: '-0.32px',
              marginBottom: 'var(--spacing-16)',
              fontWeight: 400,
            }}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            style={{
              fontSize: '16px',
              color: 'var(--color-slate)',
              fontFamily: 'var(--font-abc-arizona-sans)',
              letterSpacing: '-0.32px',
              lineHeight: 1.2,
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
