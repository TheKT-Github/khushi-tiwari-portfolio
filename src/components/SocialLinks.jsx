import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function SocialLinks({ size = 20, className = '' }) {
  const links = [
    {
      name: 'GitHub',
      href: personalData.github,
      icon: Github,
      label: 'Visit Khushi Tiwari GitHub Profile'
    },
    {
      name: 'LinkedIn',
      href: personalData.linkedin,
      icon: Linkedin,
      label: 'Connect with Khushi Tiwari on LinkedIn'
    },
    {
      name: 'Email',
      href: `mailto:${personalData.email}`,
      icon: Mail,
      label: 'Send an email to Khushi Tiwari'
    }
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className={className}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name === 'Email' ? undefined : '_blank'}
            rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              transition: 'all var(--transition-normal)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
              e.currentTarget.style.borderColor = 'var(--accent-purple)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
