import React from 'react';
import { Award, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          tag="Credentials"
          title="Certifications &"
          highlight="Achievements"
          subtitle="Verified technical credentials in Agentic AI, low-code platforms, DevOps, cloud infrastructure, and web engineering."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {certificationsData.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="badge-pill badge-cyan" style={{ fontSize: '0.75rem' }}>
                    {cert.category}
                  </span>
                  <ShieldCheck size={18} color="var(--accent-purple)" />
                </div>

                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {cert.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {cert.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                      textDecoration: 'none',
                      padding: '0.5rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(34, 211, 238, 0.3)',
                      background: 'rgba(34, 211, 238, 0.07)',
                      transition: 'all var(--transition-fast)',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 211, 238, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 211, 238, 0.07)';
                      e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                    }}
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </a>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} color="var(--accent-cyan)" />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {cert.certificateUrl ? 'Verified Technical Credential' : 'Project Achievement & Recognition'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

