import Link from 'next/link';

const pageLinks = [
  { href: '/',        label: 'Home'      },
  { href: '/offer',   label: 'The Offer' },
  { href: '/proof',   label: 'Proof'     },
  { href: '/about',   label: 'About'     },
  { href: '/contact', label: 'Contact'   },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <span className="footer-brand-accent">Contractors</span>
              <span className="footer-brand-text"> COO</span>
            </div>
            <p className="footer-tagline">
              Fractional COO + Operations Leadership for contractor teams
              doing $1M–$10M/year.
            </p>
            <p className="footer-kps">
              A service of <span className="footer-kps-name">The KPS Group</span>
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="footer-section-label">Pages</p>
            <ul className="footer-link-list">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-section-label">Contact</p>
            <div className="footer-contact">
              <a href="tel:+14695343392" className="footer-contact-item">
                (469) 534-3392
              </a>
              <a href="mailto:hello@contractorscoo.com" className="footer-contact-item">
                hello@contractorscoo.com
              </a>
              <p className="footer-address">Caddo Mills, TX 75135</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} The KPS Group. All rights reserved.
          </p>
          <Link
            href="https://www.contractorjobcosting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-sister-link"
          >
            Also: Contractor Job Costing →
          </Link>
        </div>
      </div>
    </footer>
  );
}
