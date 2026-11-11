import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Github, ExternalLink, CheckCircle2, AlertCircle, Wrench, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(8, 11, 22, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.25rem',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-modal)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '820px',
          maxHeight: 'min(90vh, 880px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header Bar with Close Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            backgroundColor: 'rgba(13, 18, 36, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge-pill badge-cyan">{project.badge}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Project Architecture &amp; Details</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal dialog"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
              e.currentTarget.style.borderColor = '#EF4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content - Scrollable Body */}
        <div style={{ padding: '1.75rem 2rem 2.5rem', overflowY: 'auto', flex: '1 1 auto' }}>
          {/* Project Preview Banner */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.75rem',
              backgroundColor: '#070a14'
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} Preview Illustration`}
              style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'contain' }}
            />
          </div>

          {/* Title & Subtitle */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 id="modal-project-title" style={{ fontSize: '1.75rem', marginBottom: '0.35rem', color: '#FFFFFF' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-accent)' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              Overview
            </h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.7' }}>
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.75rem'
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(239, 68, 68, 0.04)',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#F87171' }}>
                <AlertCircle size={18} />
                <h5 style={{ fontSize: '0.95rem', fontWeight: 600 }}>The Problem</h5>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.problemStatement}
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(34, 211, 238, 0.04)',
                border: '1px solid rgba(34, 211, 238, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: 'var(--accent-cyan)' }}>
                <Sparkles size={18} />
                <h5 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Architectural Solution</h5>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Contribution / Engineering Role */}
          {project.myContribution && (
            <div
              style={{
                marginBottom: '1.75rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(139, 92, 246, 0.06)',
                border: '1px solid rgba(139, 92, 246, 0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: 'var(--text-accent)' }}>
                <Sparkles size={17} />
                <h5 style={{ fontSize: '0.95rem', fontWeight: 600 }}>My Contribution &amp; Architecture Role</h5>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: '1.65' }}>
                {project.myContribution}
              </p>
            </div>
          )}

          {/* Key Features */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Key Architectural Features
            </h4>
            <div style={{ display: 'grid', gap: '0.65rem' }}>
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges Addressed */}
          {project.challenges && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Engineering Challenges Solved
              </h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {project.challenges.map((c, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem' }}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Technologies &amp; Tools Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links (rendered only if real repository or live URL exists) */}
          {(project.githubUrl || project.liveUrl) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  title="View Source Code on GitHub (Opens in new tab)"
                >
                  <Github size={18} />
                  <span>View Source Code</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLink size={18} />
                  <span>Live Demonstration</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
