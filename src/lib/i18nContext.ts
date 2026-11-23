import { createContext } from 'react';
import { fr, en, type Dictionary } from './dictionaries';

export type Lang = 'fr' | 'en';
export const dictionaries: Record<Lang, Dictionary> = { fr, en };

export interface I18n {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
}

export const I18nContext = createContext<I18n | null>(null);
