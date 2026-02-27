import Link from 'next/link';

const pageLinks = [
  { href: '/',                              label: 'Home'                       },
  { href: '/offer',                         label: 'The Offer'                  },
  { href: '/proof',                         label: 'Proof'                      },
  { href: '/about',                         label: 'About'                      },
  { href: '/contact',                       label: 'Contact'                    },
  { href: '/monday-agenda',                 label: 'The Monday Agenda'          },
  { href: '/fractional-coo-contractors',    label: 'Fractional COO'             },
  { href: '/contractor-operations-system',  label: 'Operations System'          },
  { href: '/owner-bottleneck',              label: 'Owner Bottleneck'           },
  { href: '/contractor-growing-pains',     label: 'Growing Pains'              },
  { href: '/fractional-coo-vs-eos',        label: 'COO vs EOS'                 },
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
              <a href="mailto:sales@thekpsgroup.com" className="footer-contact-item">
                sales@thekpsgroup.com
              </a>
              <p className="footer-address">Caddo Mills, TX 75135</p>
            </div>
          </div>
        </div>

        {/* Other installs */}
        <div style={{ borderTop: '1px solid var(--color-line)', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.75rem' }}>
            The KPS Group Service Ecosystem
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <a
                href="https://www.contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Contractor Setup Install →
              </a>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.25rem' }}>Foundation install for new contractors. Entity, banking, books, operating rhythm.</p>
            </div>
            <div>
              <a
                href="https://www.contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Contractor Job Costing →
              </a>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.25rem' }}>Job costing & cash flow for $750K–$8M contractors. Know your margin. Fix your cash flow.</p>
            </div>
            <div>
              <span className="footer-link" style={{ color: 'var(--color-fg)', cursor: 'default' }}>
                Contractors COO
              </span>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.25rem' }}>Operations leadership for $1M–$10M teams. Cadence, accountability, execution rhythm.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} The KPS Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
