import React from 'react';
import { ArrowRight, FileDown, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import SocialLinks from '../components/SocialLinks';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 3rem)',
        paddingBottom: '4rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3.5rem',
            flexWrap: 'wrap'
          }}
          className="hero-grid"
        >
          {/* Left Side: Introduction */}
          <div style={{ flex: '1 1 540px', maxWidth: '680px' }}>
            {/* Top Greeting Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge-pill">
                <Sparkles size={14} color="var(--accent-purple)" />
                <span>Hello, I'm</span>
              </span>
              <span className="badge-pill badge-cyan" style={{ fontSize: '0.78rem' }}>
                Available for Software Engineering Roles
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1rem',
                color: '#FFFFFF'
              }}
            >
              <span className="gradient-text">{personalData.name}</span>
            </h1>

            {/* Professional Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontWeight: 600,
                color: 'var(--text-accent)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}
            >
              {personalData.title}
            </h2>

            {/* Tagline / Bio Quote */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                marginBottom: '2.25rem',
                maxWidth: '580px'
              }}
            >
              "{personalData.tagline}"
            </p>

            {/* Call To Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </a>

              {personalData.resumePath && (
                <a
                  href={personalData.resumePath}
                  download="Khushi_Tiwari_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FileDown size={17} />
                  <span>Download Resume</span>
                </a>
              )}
            </div>

            {/* Social Connect Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect:
              </span>
              <SocialLinks />
            </div>
          </div>

          {/* Right Side: Small Professional Photograph (150-180px) */}
          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="hero-avatar-wrapper"
          >
            <div
              className="floating-avatar"
              style={{
                position: 'relative',
                padding: '5px',
                borderRadius: '28px',
                background: 'var(--grad-border)',
                boxShadow: '0 12px 35px rgba(139, 92, 246, 0.28), 0 0 20px rgba(59, 130, 246, 0.15)'
              }}
            >
              <div
                style={{
                  width: '170px',
                  height: '170px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={personalData.profilePhoto}
                  alt={`${personalData.name} - Professional Profile`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="eager"
                />
              </div>

              {/* Status pill dot indicator */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span
                  className="pulse-indicator"
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    display: 'inline-block'
                  }}
                />
                <span style={{ fontSize: '0.72rem', color: '#E2E8F0', fontWeight: 600, letterSpacing: '0.02em' }}>
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Caption beneath avatar frame */}
            <p style={{ marginTop: '1.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Khushi Tiwari • B.Tech CSE
            </p>
          </div>
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            flex-direction: column-reverse !important;
            align-items: flex-start !important;
            gap: 2.5rem !important;
          }
          .hero-avatar-wrapper {
            align-self: center !important;
            margin-bottom: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
