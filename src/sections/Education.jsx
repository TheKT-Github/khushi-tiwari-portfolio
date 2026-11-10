import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'rgba(16, 21, 40, 0.4)' }}>
      <div className="container">
        <SectionHeading
          tag="Academics"
          title="Education"
          highlight="History"
          subtitle="Foundational engineering education and academic milestones."
        />

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {educationData.map((edu, index) => (
            <div
              key={edu.institution}
              className="glass-card"
              style={{
                padding: '2rem 2.25rem',
                borderLeft: index === 0 ? '4px solid var(--accent-cyan)' : '4px solid var(--accent-blue)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                    <span className="badge-pill" style={{ color: index === 0 ? 'var(--accent-cyan)' : 'var(--text-accent)' }}>
                      <GraduationCap size={15} />
                      {edu.degree}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 700 }}>
                    {edu.institution}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    <Calendar size={14} color="var(--accent-cyan)" />
                    <span>{edu.duration}</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
