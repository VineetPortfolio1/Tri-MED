import Logo from './Logo.jsx';
import { NAV } from './Header.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>A fictional integrative psychiatry clinic created as a design demonstration.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">Explore</h2>
          <ul>
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contact (examples)</h2>
          <ul>
            <li>
              <a href="tel:+15555550123">(555) 555-0123</a>
            </li>
            <li>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>123 Placeholder Lane, Sampletown</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} SereneMind (fictional). All details are placeholders.</p>
        <a href="#privacy" onClick={(e) => e.preventDefault()} aria-disabled="true">
          Privacy policy (placeholder)
        </a>
      </div>
    </footer>
  );
}
