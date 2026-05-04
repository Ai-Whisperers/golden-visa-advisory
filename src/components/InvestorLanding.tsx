'use client'

import { useLocale } from '@/lib/locale-context'
import content from '@/content'
import { ComparisonTable } from './ComparisonTable'
import { SuccessStory } from './SuccessStory'

const programs = content.programs

export function InvestorLanding() {
  const { locale, t } = useLocale()

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full glass-panel z-40 px-6 py-4 flex items-center justify-between">
        <span className="gradient-gold font-bold text-lg">Golden Visa Advisory</span>
        <div className="flex items-center gap-4 text-sm">
          <a href="#process" className="text-muted hover:text-foreground transition-colors">Process</a>
          <a href="#programs" className="text-muted hover:text-foreground transition-colors">Programs</a>
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            {t.investor.hero.cta}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,169,81,0.08)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="gradient-gold">{t.investor.hero.title}</span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-foreground">
              {t.investor.hero.subtitle}
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.investor.hero.description}
          </p>
          <a href="#contact" className="btn-primary text-lg">
            {t.investor.hero.cta}
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 gradient-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title gradient-gold">{t.investor.team.title}</h2>
          <p className="section-subtitle">{t.investor.team.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { name: locale === 'en' ? 'Raúl Fretes' : 'Raúl Fretes', role: locale === 'en' ? 'Founder & Managing Director' : 'Fundador & Director Gerente', desc: locale === 'en' ? '8+ years structuring cross-border investments between Latin America and global markets.' : '8+ años estructurando inversiones transfronterizas entre Latinoamérica y mercados globales.' },
              { name: locale === 'en' ? 'Advisory Team' : 'Equipo Asesor', role: locale === 'en' ? 'Legal & Regulatory' : 'Legal & Regulatorio', desc: locale === 'en' ? 'Experienced in Paraguayan corporate law, immigration regulation, and international compliance.' : 'Experiencia en derecho corporativo paraguayo, regulación migratoria y compliance internacional.' },
              { name: locale === 'en' ? 'Partners Network' : 'Red de Partners', role: locale === 'en' ? 'Global Agents & Local Firms' : 'Agentes Globales & Firmas Locales', desc: locale === 'en' ? 'Verified network of immigration agents, law firms, and wealth managers across 15+ countries.' : 'Red verificada de agentes de inmigración, estudios jurídicos y wealth managers en 15+ países.' },
            ].map((m, i) => (
              <div key={i} className="glass-panel rounded-xl p-6 text-left">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-secondary font-bold text-lg mb-4">
                  {m.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-lg mb-1">{m.name}</h3>
                <p className="text-primary text-sm mb-3">{m.role}</p>
                <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title gradient-gold">{t.investor.trackRecord.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { value: t.investor.trackRecord.projectsValue, label: t.investor.trackRecord.projects },
              { value: t.investor.trackRecord.capitalValue, label: t.investor.trackRecord.capital },
              { value: t.investor.trackRecord.nationalitiesValue, label: t.investor.trackRecord.nationalities },
              { value: t.investor.trackRecord.yearsValue, label: t.investor.trackRecord.years },
            ].map((s, i) => (
              <div key={i} className="glass-panel rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-gold mb-2">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {t.investor.testimonials?.items && (
        <section className="py-24 gradient-bg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="section-title gradient-gold">{t.investor.testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {t.investor.testimonials.items.map((item, i) => (
                <div key={i} className="glass-panel rounded-xl p-6">
                  <p className="text-foreground/80 italic leading-relaxed mb-4">"{item.quote}"</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.flag}</span>
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-muted text-xs">{item.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title gradient-gold">{t.investor.process.title}</h2>
          <p className="section-subtitle">{t.investor.process.subtitle}</p>
          <div className="space-y-6 mt-10">
            {t.investor.process.steps.map((step, i) => (
              <div key={i} className="glass-panel rounded-xl p-6 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-secondary font-bold text-lg shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="programs" className="py-24 gradient-bg">
        <div className="max-w-5xl mx-auto px-6">
          <ComparisonTable />
        </div>
      </section>

      {/* SUCCESS STORY */}
      <SuccessStory />

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="section-title gradient-gold">{t.investor.cta.title}</h2>
          <p className="section-subtitle">{t.investor.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="#" className="btn-primary text-lg">
              {t.investor.cta.cta}
            </a>
            <a href="#" className="btn-outline text-lg">
              WhatsApp
            </a>
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
