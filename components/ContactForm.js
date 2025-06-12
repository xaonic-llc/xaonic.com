import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1rem',
            color: 'var(--color-black)'
          }}>
            Let's Start Your Project
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--color-black)',
            opacity: '0.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Tell us about your project and we'll get back to you as soon as possible
            with a detailed proposal and next steps.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--color-black)'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--color-black)'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--color-black)'
                }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--color-black)'
                }}>
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <option value="">Select project type</option>
                  <option value="mvp">MVP Development</option>
                  <option value="saas">SaaS Platform</option>
                  <option value="shopify">Shopify App</option>
                  <option value="team">Team Building</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--color-black)'
                }}>
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <option value="">Select budget range</option>
                  <option value="5k-15k">$5K - $15K</option>
                  <option value="15k-50k">$15K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--color-black)'
                }}>
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  fontSize: '1.1rem',
                  padding: '15px'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  borderRadius: '5px',
                  textAlign: 'center'
                }}>
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.4rem',
                marginBottom: '1.5rem',
                color: 'var(--color-black)'
              }}>
                Get in Touch
              </h3>

              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <EmailIcon style={{ marginRight: '12px', color: 'var(--color-purple)' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-black)' }}>Email</h4>
                  <p style={{ color: 'var(--color-black)', opacity: '0.7', margin: 0 }}>
                    hello@xaonic.com
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon style={{ marginRight: '12px', color: 'var(--color-blue)' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-black)' }}>Response Time</h4>
                  <p style={{ color: 'var(--color-black)', opacity: '0.7', margin: 0 }}>
                    As soon as possible
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleIcon style={{ marginRight: '12px', color: 'var(--color-black)' }} />
                <div>
                  <h4 style={{ marginBottom: '0.25rem', color: 'var(--color-black)' }}>Availability</h4>
                  <p style={{ color: 'var(--color-black)', opacity: '0.7', margin: 0 }}>
                    Flexible hours to match your time zone
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{
                fontSize: '1.4rem',
                marginBottom: '1.5rem',
                color: 'var(--color-black)'
              }}>
                What Happens Next?
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <DescriptionIcon style={{
                    color: 'var(--color-purple)',
                    marginRight: '1rem',
                    marginTop: '2px',
                    flexShrink: 0
                  }} />
                  <div>
                    <h5 style={{ marginBottom: '0.25rem', color: 'var(--color-black)' }}>
                      Initial Review
                    </h5>
                    <p style={{ color: 'var(--color-black)', opacity: '0.7', fontSize: '0.9rem' }}>
                      We review your project details and requirements
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <PhoneIcon style={{
                    color: 'var(--color-blue)',
                    marginRight: '1rem',
                    marginTop: '2px',
                    flexShrink: 0
                  }} />
                  <div>
                    <h5 style={{ marginBottom: '0.25rem', color: 'var(--color-black)' }}>
                      Consultation Call
                    </h5>
                    <p style={{ color: 'var(--color-black)', opacity: '0.7', fontSize: '0.9rem' }}>
                      30-minute strategy session to discuss your needs
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <CheckCircleIcon style={{
                    color: 'var(--color-black)',
                    marginRight: '1rem',
                    marginTop: '2px',
                    flexShrink: 0
                  }} />
                  <div>
                    <h5 style={{ marginBottom: '0.25rem', color: 'var(--color-black)' }}>
                      Detailed Proposal
                    </h5>
                    <p style={{ color: 'var(--color-black)', opacity: '0.7', fontSize: '0.9rem' }}>
                      Comprehensive project plan with timeline and pricing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
