import React from 'react';
import { Terminal, Database, Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutData, personalData } from '../data/portfolioData';

export default function About() {
  const iconMap = [Terminal, Brain, Database];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(16, 21, 40, 0.4)' }}>
      <div className="container">
        <SectionHeading
          tag="Background"
          title="About"
          highlight="Khushi Tiwari"
          subtitle="A dedicated Computer Science graduate with real-world project building and engineering experience."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Bio Narrative */}
          <div className="glass-card" style={{ padding: '2.25rem 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="badge-pill badge-cyan">Computer Science Engineering</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>GLA University</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: '1.02rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Core Competency Highlights */}
            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem'
              }}
            >
              {[
                'Full-Stack & Backend',
                'OOP & Design Patterns',
                'RAG & Agentic AI',
                'Automated Testing'
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-purple)" />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Architectural Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {aboutData.highlights.map((highlight, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div
                  key={highlight.title}
                  className="glass-card"
                  style={{
                    padding: '1.6rem 1.75rem',
                    transition: 'all var(--transition-normal)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple)',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.4rem', fontWeight: 600 }}>
                      {highlight.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
