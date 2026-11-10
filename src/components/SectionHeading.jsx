import React from 'react';

export default function SectionHeading({ tag, title, highlight, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      {tag && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <span className="badge-pill">
            <span className="pulse-indicator" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-purple)' }}></span>
            {tag}
          </span>
        </div>
      )}
      <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1rem', color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
