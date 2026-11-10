import React from 'react';
import { Github, ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const isFeatured = project.featured;

  return (
    <article
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        border: isFeatured
          ? '1px solid rgba(139, 92, 246, 0.4)'
          : '1px solid var(--border-subtle)',
        background: isFeatured
          ? 'linear-gradient(180deg, rgba(20, 27, 54, 0.85) 0%, rgba(13, 17, 34, 0.95) 100%)'
          : 'var(--bg-card)',
        boxShadow: isFeatured ? '0 12px 35px rgba(139, 92, 246, 0.15)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-normal)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = isFeatured ? 'var(--accent-purple)' : 'var(--border-light)';
        e.currentTarget.style.boxShadow = isFeatured
          ? '0 20px 45px rgba(139, 92, 246, 0.28)'
          : 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = isFeatured ? 'rgba(139, 92, 246, 0.4)' : 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = isFeatured ? '0 12px 35px rgba(139, 92, 246, 0.15)' : 'var(--shadow-sm)';
      }}
    >
      {/* Top Banner Tag for Featured Projects */}
      {isFeatured && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 3
          }}
        >
          <span className="badge-pill" style={{ background: 'rgba(139, 92, 246, 0.9)', color: '#FFFFFF', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
            <Sparkles size={13} />
            Featured Work
          </span>
        </div>
      )}

      {/* Media / Preview */}
      <div
        style={{
          width: '100%',
          height: '220px',
          backgroundColor: '#0a0e1c',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer'
        }}
        onClick={() => onSelect(project)}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot preview`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(8, 11, 22, 0.8) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Category & Title */}
        <div style={{ marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge-pill badge-cyan" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
              {project.badge}
            </span>
          </div>
          <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.25rem' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-accent)', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.78rem',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)'
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span
              style={{
                fontSize: '0.78rem',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(139, 92, 246, 0.08)',
                color: 'var(--text-accent)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}
            >
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem'
          }}
        >
          <button
            onClick={() => onSelect(project)}
            className="btn btn-primary btn-sm"
            style={{ flexGrow: 1 }}
          >
            <span>View Architecture</span>
            <ArrowRight size={15} />
          </button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="View Source Code on GitHub"
              aria-label={`View ${project.title} Source Code on GitHub`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.85rem' }}
            >
              <Github size={15} />
              <span>Code</span>
            </a>
          ) : (
            <span
              className="btn btn-secondary btn-sm"
              title="Repository URL pending publication"
              style={{
                opacity: 0.5,
                cursor: 'not-allowed',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderStyle: 'dashed'
              }}
            >
              <Github size={15} />
              <span>Repo Pending</span>
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`Open ${project.title} Live Demo`}
              style={{ width: '38px', height: '36px', padding: 0 }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
