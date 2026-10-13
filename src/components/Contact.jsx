import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Info } from 'lucide-react';
import Reveal from './Reveal.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  if (!email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'That email address does not look right.';
  if (!message.trim()) errors.message = 'Please write a short message.';
  else if (message.trim().length < 10) errors.message = 'Please write at least a few words (10 characters).';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = ['name', 'email', 'message'].find((k) => found[k]);
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    // Demo only: nothing is transmitted anywhere.
    setSubmitted(true);
    setValues({ name: '', email: '', message: '' });
  };

  const field = (id, label, input) => (
    <div className={`field ${errors[id] ? 'has-error' : ''}`}>
      <label htmlFor={`field-${id}`}>{label}</label>
      {input}
      <p className="field__error" id={`error-${id}`} role={errors[id] ? 'alert' : undefined}>
        {errors[id]}
      </p>
    </div>
  );

  const common = (id) => ({
    id: `field-${id}`,
    name: id,
    value: values[id],
    onChange,
    'aria-invalid': errors[id] ? 'true' : 'false',
    'aria-describedby': `error-${id}`,
  });

  return (
    <section id="contact" className="section section--sage" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__info">
          <Reveal as="span" className="eyebrow">
            Contact
          </Reveal>
          <Reveal as="h2" id="contact-title" delay={60}>
            Start a <em className="accent">conversation</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={120}>
            Send a short note and imagine our team replying. This is a demonstration form.
          </Reveal>

          <Reveal as="ul" className="contact__list" delay={180}>
            <li>
              <Phone size={20} aria-hidden="true" />
              <span>
                <a href="tel:+15555550123">(555) 555-0123</a>
                <small>Example number</small>
              </span>
            </li>
            <li>
              <Mail size={20} aria-hidden="true" />
              <span>
                <a href="mailto:hello@example.com">hello@example.com</a>
                <small>Example address</small>
              </span>
            </li>
            <li>
              <MapPin size={20} aria-hidden="true" />
              <span>
                123 Placeholder Lane, Sampletown
                <small>Example address, not a real location</small>
              </span>
            </li>
            <li>
              <Clock size={20} aria-hidden="true" />
              <span>
                Mon to Fri, 9am to 5pm
                <small>Example hours</small>
              </span>
            </li>
          </Reveal>
        </div>

        <Reveal className="contact__panel" delay={120}>
          {submitted ? (
            <div className="contact__done" role="status" tabIndex={-1}>
              <Info size={28} aria-hidden="true" />
              <h3>Thanks, this was a demo</h3>
              <p>
                SereneMind is a fictional clinic, so your message was <strong>not sent</strong> to
                anyone and nothing has been stored. In a real project, this is where a confirmation
                from the clinic would appear.
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setSubmitted(false)}>
                Back to the form
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <p className="contact__notice">
                <Info size={18} aria-hidden="true" />
                <span>
                  Demo form: nothing you type is sent anywhere. Please do not enter sensitive
                  medical or personal information.
                </span>
              </p>

              {field('name', 'Your name', <input type="text" autoComplete="name" {...common('name')} />)}
              {field(
                'email',
                'Email address',
                <input type="email" autoComplete="email" {...common('email')} />
              )}
              {field(
                'message',
                'Message',
                <textarea rows={5} placeholder="A general question or note (no medical details)" {...common('message')} />
              )}

              <button type="submit" className="btn btn--primary contact__submit">
                Send demo message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
