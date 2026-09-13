import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 6000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateIn);
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => { if (observerRef.current) observerRef.current.disconnect(); };
  }, []);

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', required: false },
  ];

  return (
    <div className={styles.pageWrapper}>

      {/* ── Big Type Hero ── */}
      <section className={styles.heroSection}>

        {/* Eyebrow */}
        <div className={`${styles.heroEyebrow} ${styles.animateOnScroll}`}>
          <span className={styles.heroEyebrowDot} />
          <span>ZECOWOOD — CONTACT</span>
        </div>

        {/* Main type */}
        <div className={styles.heroBigText}>
          <div className={`${styles.heroLine} ${styles.animateOnScroll} ${styles.delay1}`}>
            <span>SAY</span>
          </div>
          <div className={`${styles.heroLine} ${styles.heroLineOutline} ${styles.animateOnScroll} ${styles.delay2}`}>
            <span>HELLO.</span>
          </div>
        </div>

        {/* Meta strip */}
        <div className={`${styles.heroMeta} ${styles.animateOnScroll} ${styles.delay2}`}>
          <div className={styles.heroMetaItem}>
            <p className={styles.heroMetaLabel}>BRAND</p>
            <p className={styles.heroMetaValue}>ZECOGLOBAL</p>
          </div>
          <div className={styles.heroMetaDivider} />
          <div className={styles.heroMetaItem}>
            <p className={styles.heroMetaLabel}>EMAIL</p>
            <a href="mailto:hello@zecowood.com" className={styles.heroMetaValue}>hello@zecowood.com</a>
          </div>
          <div className={styles.heroMetaDivider} />
          <div className={styles.heroMetaItem}>
            <p className={styles.heroMetaLabel}>RESPONSE TIME</p>
            <p className={styles.heroMetaValue}>Within 24 hours</p>
          </div>
          <div className={styles.heroMetaDivider} />
          <div className={styles.heroMetaItem}>
            <p className={styles.heroMetaLabel}>PHONE</p>
            <a href="tel:+1234567890" className={styles.heroMetaValue}>+1 (234) 567-890</a>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>

          {/* Left rail */}
          <div className={`${styles.formRail} ${styles.animateOnScroll}`}>
            <div className={styles.railNumber}>01</div>
            <div className={styles.railLine} />
            <p className={styles.railText}>Fill in the form and our team will get back to you within 24 hours.</p>

            <div className={styles.contactLinks}>
              <a href="tel:+1234567890" className={styles.contactLinkRow}>
                <span className={styles.contactLinkLabel}>TEL</span>
                <span className={styles.contactLinkValue}>+1 (234) 567-890</span>
              </a>
              <a href="mailto:hello@zecowood.com" className={styles.contactLinkRow}>
                <span className={styles.contactLinkLabel}>EMAIL</span>
                <span className={styles.contactLinkValue}>hello@zecowood.com</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formBody}>
            <form className={styles.form} onSubmit={handleSubmit}>

              {/* Inline fields */}
              <div className={styles.fieldsGrid}>
                {fields.map((field, index) => (
                  <div
                    key={field.name}
                    className={`${styles.fieldWrap} ${focused === field.name ? styles.fieldFocused : ''} ${formData[field.name] ? styles.fieldFilled : ''} ${styles.animateOnScroll}`}
                    style={{ transitionDelay: `${0.1 + (index * 0.1)}s` }}
                  >
                    <label className={styles.fieldLabel} htmlFor={field.name}>
                      {field.label}{!field.required && <span className={styles.optional}> (optional)</span>}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className={styles.fieldInput}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      required={field.required}
                      autoComplete="off"
                    />
                    <div className={styles.fieldBar} />
                  </div>
                ))}
              </div>

              {/* Message */}
              <div 
                className={`${styles.fieldWrap} ${styles.messageWrap} ${focused === 'message' ? styles.fieldFocused : ''} ${formData.message ? styles.fieldFilled : ''} ${styles.animateOnScroll}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <label className={styles.fieldLabel} htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.fieldTextarea}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={5}
                />
                <div className={styles.fieldBar} />
              </div>

              {/* Submit row */}
              <div className={`${styles.submitRow} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.5s' }}>
                <button type="submit" className={styles.submitBtn}>
                  <span className={styles.submitText}>Send Message</span>
                  <svg className={styles.submitArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {formStatus === 'success' && (
                  <div className={styles.successBadge}>
                    <span className={styles.successDot} />
                    <span>Message sent. We'll reply shortly.</span>
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ── Bottom Bar ── */}
      <footer className={`${styles.pageFooter} ${styles.animateOnScroll}`}>
        <p className={styles.footerLeft}>ZECOWOOD — A ZECOGLOBAL BRAND</p>
        <p className={styles.footerRight}>HEADQUARTERS: GLOBAL CITY, 45678</p>
      </footer>

    </div>
  );
}
