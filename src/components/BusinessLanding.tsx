'use client'

import { useLocale } from '@/lib/locale-context'
import { BusinessFAQ } from './BusinessFAQ'

export function BusinessLanding() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full glass-panel z-40 px-6 py-4 flex items-center justify-between">
        <span className="gradient-gold font-bold text-lg">Golden Visa Advisory</span>
        <div className="flex items-center gap-4 text-sm">
          <a href="#what-is-gv" className="text-muted hover:text-foreground transition-colors">Industry</a>
          <a href="#services" className="text-muted hover:text-foreground transition-colors">Services</a>
          <a href="#faq" className="text-muted hover:text-foreground transition-colors">FAQ</a>
          <a href="#contact-biz" className="btn-primary !py-2 !px-4 text-sm">
            {t.business.hero.cta}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,169,81,0.08)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-gold">{t.business.hero.title}</span>
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.business.hero.subtitle}
          </p>
          <a href="#contact-biz" className="btn-primary text-lg">
            {t.business.hero.cta}
          </a>
        </div>
      </section>

      {/* WHAT IS GV */}
      <section id="what-is-gv" className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title gradient-gold">{t.business.whatIsGV.title}</h2>
          <p className="text-muted text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.business.whatIsGV.description}
          </p>
          {t.business.whatIsGV.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.business.whatIsGV.stats.map((s, i) => (
                <div key={i} className="glass-panel rounded-xl p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-gold mb-2">{s.value}</div>
                  <div className="text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title gradient-gold">{t.business.services.title}</h2>
          <p className="section-subtitle">{t.business.services.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {t.business.services.items.map((s, i) => (
              <div key={i} className="glass-panel rounded-xl p-6">
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAIN OF TRUST */}
      {t.business.chainOfTrust && (
        <section className="py-24 gradient-bg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="section-title gradient-gold">{t.business.chainOfTrust.title}</h2>
            <p className="section-subtitle">{t.business.chainOfTrust.subtitle}</p>
            <div className="relative mt-10">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              <div className="space-y-8">
                {t.business.chainOfTrust.links.map((link, i) => (
                  <div key={i} className="relative pl-14">
                    <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <div className="glass-panel rounded-xl p-4">
                      <h3 className="font-semibold">{link.title}</h3>
                      <p className="text-muted text-sm mt-1">{link.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* INVESTOR PROFILES */}
      {t.business.investorProfiles && (
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="section-title gradient-gold">{t.business.investorProfiles.title}</h2>
            <p className="section-subtitle">{t.business.investorProfiles.subtitle}</p>
            <div className="overflow-x-auto mt-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 pr-4 text-sm font-medium text-muted">Profile</th>
                    <th className="py-4 px-3 text-sm font-medium text-muted">Needs</th>
                    <th className="py-4 px-3 text-sm font-medium text-muted">Key Regions</th>
                  </tr>
                </thead>
                <tbody>
                  {t.business.investorProfiles.items.map((item, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                      <td className="py-4 pr-4 text-sm font-semibold">{item.type}</td>
                      <td className="py-4 px-3 text-sm text-muted">{item.needs}</td>
                      <td className="py-4 px-3 text-sm text-muted">{item.regions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-24 gradient-bg">
        <BusinessFAQ />
      </section>

      {/* CTA */}
      <section id="contact-biz" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="section-title gradient-gold">{t.business.cta.title}</h2>
          <p className="section-subtitle">{t.business.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#" className="btn-primary text-lg">
              {t.business.cta.cta}
            </a>
            <a href="#" className="btn-outline text-lg">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="gradient-gold font-bold">Golden Visa Advisory</span>
          <span className="text-muted text-sm">© 2026 — Paraguai</span>
        </div>
      </footer>
    </div>
  )
}
