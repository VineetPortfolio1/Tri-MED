import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__bar">
        <a href="#home" className="site-header__logo" aria-label="SereneMind, home" onClick={close}>
          <Logo />
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} id="primary-nav" aria-label="Primary">
          <ul className="nav__list">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link ${active === id ? 'is-active' : ''}`}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary nav__cta" onClick={close}>
            Appointment inquiry
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
