import { useEffect, useState, type ReactNode } from 'react';
import { I18nContext, dictionaries, type Lang } from './i18nContext';

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    return navigator.language.startsWith('fr') ? 'fr' : 'en';
  }
  return navigator.language.startsWith('fr') ? 'fr' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      return;
    }
  }, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>{children}</I18nContext.Provider>;
}
