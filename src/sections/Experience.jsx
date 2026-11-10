import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'rgba(16, 21, 40, 0.4)' }}>
      <div className="container">
        <SectionHeading
          tag="Career"
          title="Professional"
          highlight="Experience"
          subtitle="Enterprise software consulting and frontend engineering internships."
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp, index) => (
            <div
              key={exp.company}
              className="glass-card"
              style={{
                padding: '2.25rem 2rem',
                borderLeft: '4px solid var(--accent-purple)',
                position: 'relative',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Header: Role & Company */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                    <span className="badge-pill badge-cyan">{exp.type}</span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', fontWeight: 700 }}>
                    {exp.role}
                  </h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-accent)', fontWeight: 600 }}>
                    {exp.company}
                  </h4>
                </div>

                {/* Duration & Location Badges */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    <Calendar size={15} color="var(--accent-purple)" />
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '1.5rem 0' }}>
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2
                      size={17}
                      color="var(--accent-cyan)"
                      style={{ marginTop: '0.2rem', flexShrink: 0 }}
                    />
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                      {resp}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                {exp.techTags.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
