import React from 'react';

export interface HeroProps {
  image?: React.ReactNode;
  headline: string;
  subheadline?: string;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ image, headline, subheadline, cta, children }) => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        backgroundColor: 'var(--color-clay)',
      }}
    >
      {image && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>{image}</div>
      )}

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'var(--spacing-64) var(--spacing-32)',
          maxWidth: '560px',
          color: 'var(--color-white)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'var(--text-heading)',
            fontWeight: 600,
            lineHeight: 'var(--leading-heading)',
            marginBottom: 'var(--spacing-16)',
          }}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            style={{
              fontFamily: 'var(--font-work-sans)',
              fontSize: 'var(--text-body-lg)',
              fontWeight: 400,
              lineHeight: 'var(--leading-body-lg)',
              marginBottom: 'var(--spacing-24)',
            }}
          >
            {subheadline}
          </p>
        )}

        {cta && (
          <button
            onClick={cta.onClick}
            style={{
              backgroundColor: 'var(--color-ember)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '0 var(--spacing-20)',
              minHeight: '36px',
              fontFamily: 'var(--font-work-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {cta.label}
          </button>
        )}

        {children}
      </div>
    </section>
  );
};
