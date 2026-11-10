import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          tag="Credentials"
          title="Certifications &amp;"
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <CheckCircle size={15} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified Technical Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
