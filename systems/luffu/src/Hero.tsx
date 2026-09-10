import React from 'react';
import '../styles/variables.css';

interface HeroProps {
  image?: React.ReactNode;
  headline: string;
  subheadline?: string;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  image,
  headline,
  subheadline,
  cta,
  children,
}) => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {image && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          {image}
        </div>
      )}

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'var(--spacing-123) var(--spacing-32)',
          maxWidth: '600px',
          color: 'var(--color-white)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-abc-arizona-flare)',
            fontSize: '48px',
            fontWeight: 400,
            letterSpacing: '-2.02px',
            lineHeight: 1,
            marginBottom: 'var(--spacing-20)',
          }}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            style={{
              fontFamily: 'var(--font-abc-arizona-sans)',
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '-0.32px',
              lineHeight: 1.2,
              marginBottom: 'var(--spacing-32)',
            }}
          >
            {subheadline}
          </p>
        )}

        {cta && (
          <button
            onClick={cta.onClick}
            style={{
              backgroundColor: 'var(--color-deep-ink)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: '4px',
              padding: '0 20px',
              fontFamily: 'var(--font-abc-arizona-sans)',
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.32px',
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
