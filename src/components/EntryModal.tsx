'use client'

import { useState, useEffect } from 'react'
import { useLocale } from '@/lib/locale-context'
import content from '@/content'

const languages = content.languages

export function EntryModal() {
  const { locale, path, isReady, setLocale, setPath } = useLocale()
  const [show, setShow] = useState(false)
  const [selectedLang, setSelectedLang] = useState('en')
  const [selectedPath, setSelectedPath] = useState<'investor' | 'business' | null>(null)

  useEffect(() => {
    if (isReady && !path) {
      setShow(true)
      setSelectedLang(locale)
    }
  }, [isReady, path, locale])

  const t = (content as any)[selectedLang]?.entry || content.en.entry

  const handleContinue = () => {
    if (!selectedPath) return
    setLocale(selectedLang)
    setPath(selectedPath)
    localStorage.setItem('gva-preferences', JSON.stringify({ locale: selectedLang, path: selectedPath }))
    setShow(false)
  }

  if (!isReady || !show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="glass-panel rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-300">
        <h1 className="text-2xl font-bold text-center mb-1">{t.title}</h1>
        <p className="text-muted text-sm text-center mb-6">{t.subtitle}</p>

        <label className="block text-sm font-medium text-muted mb-2">{t.languageLabel}</label>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => setSelectedLang(l.code)}
              className={`p-2 rounded-lg text-center text-sm transition-all ${
                selectedLang === l.code
                  ? 'bg-primary/20 border border-primary text-primary'
                  : 'bg-surface border border-border text-muted hover:border-muted'
              }`}
              title={l.name}
            >
              <span className="text-lg block mb-0.5">{l.flag}</span>
              <span className="text-[10px] uppercase tracking-wider">{l.code}</span>
            </button>
          ))}
        </div>

        <label className="block text-sm font-medium text-muted mb-2">{t.pathLabel}</label>
        <div className="space-y-3 mb-6">
          <button
            onClick={() => setSelectedPath('investor')}
            className={`w-full p-4 rounded-xl text-left transition-all ${
              selectedPath === 'investor'
                ? 'bg-primary/10 border-2 border-primary'
                : 'bg-surface border-2 border-border hover:border-primary/50'
            }`}
          >
            <div className="text-lg font-semibold">{t.pathResidency}</div>
            <div className="text-sm text-muted">
              {selectedLang === 'en' ? 'For foreign investors seeking Paraguayan residency' :
               selectedLang === 'es' ? 'Para inversores extranjeros que buscan residencia paraguaya' :
               selectedLang === 'pt' ? 'Para investidores estrangeiros buscando residência paraguaia' :
               'For foreign investors seeking Paraguayan residency'}
            </div>
          </button>
          <button
            onClick={() => setSelectedPath('business')}
            className={`w-full p-4 rounded-xl text-left transition-all ${
              selectedPath === 'business'
                ? 'bg-primary/10 border-2 border-primary'
                : 'bg-surface border-2 border-border hover:border-primary/50'
            }`}
          >
            <div className="text-lg font-semibold">{t.pathBusiness}</div>
            <div className="text-sm text-muted">
              {selectedLang === 'en' ? 'For Paraguayan companies ready for global investment markets' :
               selectedLang === 'es' ? 'Para empresas paraguayas listas para mercados de inversión global' :
               selectedLang === 'pt' ? 'Para empresas paraguaias prontas para mercados globais de investimento' :
               'For Paraguayan companies ready for global investment markets'}
            </div>
          </button>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedPath}
          className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t.continue}
        </button>
      </div>
    </div>
  )
}
