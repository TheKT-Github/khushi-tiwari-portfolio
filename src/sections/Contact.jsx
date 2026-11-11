import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, Info, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'demo_success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  // Environment variables for EmailJS
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const isEmailConfigured =
    Boolean(emailJsServiceId) &&
    Boolean(emailJsTemplateId) &&
    Boolean(emailJsPublicKey) &&
    emailJsServiceId.trim() !== '' &&
    emailJsServiceId !== 'your_emailjs_service_id_here' &&
    emailJsServiceId.length > 3;

  const validate = () => {
    const errs = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errs.name = 'Full name is required.';
    }
    if (!trimmedEmail) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!trimmedSubject) {
      errs.subject = 'Subject is required.';
    }
    if (!trimmedMessage) {
      errs.message = 'Message content is required.';
    } else if (trimmedMessage.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    } else if (trimmedMessage.length > 3000) {
      errs.message = 'Message must be under 3000 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    // Silently reject bot/spam submissions without triggering API
    if (honeypot) {
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);
    setStatusMessage('');

    const trimmedData = {
      from_name: formData.name.trim(),
      name: formData.name.trim(),
      from_email: formData.email.trim(),
      email: formData.email.trim(),
      reply_to: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      to_email: personalData.email
    };

    try {
      if (isEmailConfigured) {
        // Live delivery via EmailJS official SDK
        const result = await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          trimmedData,
          emailJsPublicKey
        );

        if (result.status === 200 || result.text === 'OK') {
          setSubmissionStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully to Khushi Tiwari. You will receive a response shortly.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('EmailJS returned status ' + result.status);
        }
      } else {
        // Honest Preview / Demo Mode (Never falsely claims delivery!)
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSubmissionStatus('demo_success');
        setStatusMessage(
          'Form validated successfully! Note: EmailJS API keys are currently in preview mode. To deliver an actual email right now, please use the direct email link below or configure .env.'
        );
      }
    } catch (err) {
      setSubmissionStatus('error');
      setStatusMessage('Delivery failed (' + (err?.text || err?.message || 'Network error') + '). Please retry or reach out directly to ' + personalData.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'rgba(16, 21, 40, 0.4)' }}>
      <div className="container">
        <SectionHeading
          tag="Connect"
          title="Get in"
          highlight="Touch"
          subtitle="Whether you have an engineering opportunity, a technical question, or want to discuss a project, my inbox is open."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {/* Left: Contact Info Card */}
          <div className="glass-card" style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '1.25rem' }}>
                Contact Information
              </span>

              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 700 }}>
                Let's discuss opportunities
              </h3>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '2rem' }}>
                I am actively seeking Software Developer, Full Stack Developer, Java Developer, and SDET opportunities. I look forward to connecting with recruiters and engineering leaders.
              </p>

              {/* Detail Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href={`mailto:${personalData.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <Mail size={20} color="var(--accent-purple)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</div>
                    <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 500 }}>{personalData.email}</div>
                  </div>
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <Linkedin size={20} color="var(--accent-blue)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 500 }}>linkedin.com/in/khushi-tiwari-908505280</div>
                  </div>
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <Github size={20} color="var(--accent-cyan)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>GitHub</div>
                    <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 500 }}>github.com/TheKT-Github</div>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <MapPin size={16} />
                <span>Open to On-site, Hybrid &amp; Remote roles across India</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '2.25rem 2rem' }}>
            {/* Status indicator banner regarding live vs demo mode */}
            {!isEmailConfigured && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  marginBottom: '1.5rem',
                  fontSize: '0.82rem',
                  color: '#93C5FD'
                }}
              >
                <Info size={16} style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <span>
                  <strong>Interactive Demo Mode:</strong> Service API keys are currently unset in <code>.env</code>. Form validation and interactions run in preview mode without sending real emails.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Invisible Honeypot Field for Spam Protection */}
              <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <input
                  type="text"
                  name="bot_field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Full Name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.4rem' }}
                >
                  Full Name <span style={{ color: '#F87171' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(8, 11, 22, 0.7)',
                    border: errors.name ? '1px solid #EF4444' : '1px solid var(--border-light)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem'
                  }}
                />
                {errors.name && (
                  <p style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.3rem' }}>{errors.name}</p>
                )}
              </div>

              {/* Email Address */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.4rem' }}
                >
                  Email Address <span style={{ color: '#F87171' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(8, 11, 22, 0.7)',
                    border: errors.email ? '1px solid #EF4444' : '1px solid var(--border-light)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem'
                  }}
                />
                {errors.email && (
                  <p style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.3rem' }}>{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label
                  htmlFor="contact-subject"
                  style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.4rem' }}
                >
                  Subject <span style={{ color: '#F87171' }}>*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Interview / Project Discussion"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(8, 11, 22, 0.7)',
                    border: errors.subject ? '1px solid #EF4444' : '1px solid var(--border-light)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem'
                  }}
                />
                {errors.subject && (
                  <p style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.3rem' }}>{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.88rem', fontWeight: 500, color: '#E2E8F0', marginBottom: '0.4rem' }}
                >
                  Message <span style={{ color: '#F87171' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your team, tech stack, or opportunity..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(8, 11, 22, 0.7)',
                    border: errors.message ? '1px solid #EF4444' : '1px solid var(--border-light)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <p style={{ fontSize: '0.8rem', color: '#F87171', marginTop: '0.3rem' }}>{errors.message}</p>
                )}
              </div>

              {/* Feedback Alert Banners */}
              {submissionStatus === 'success' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid #10B981',
                    color: '#6EE7B7',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem'
                  }}
                >
                  <CheckCircle2 size={18} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submissionStatus === 'demo_success' && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    padding: '0.9rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid #3B82F6',
                    color: '#BFDBFE',
                    marginBottom: '1.25rem',
                    fontSize: '0.88rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <Info size={18} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                    <span>{statusMessage}</span>
                  </div>
                  <div style={{ marginTop: '0.35rem' }}>
                    <a
                      href={`mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject || 'Software Developer Opportunity')}&body=${encodeURIComponent(`Hi Khushi,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`)}`}
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.84rem', padding: '0.4rem 0.85rem' }}
                    >
                      <Mail size={14} />
                      <span>Dispatch via Email Client (mailto)</span>
                    </a>
                  </div>
                </div>
              )}

              {submissionStatus === 'error' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid #EF4444',
                    color: '#FCA5A5',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem'
                  }}
                >
                  <AlertCircle size={18} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}
                style={{ width: '100%', padding: '0.85rem' }}
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
