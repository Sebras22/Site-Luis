import { useContext } from 'react';
import { I18nContext } from './i18nContext';

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n hors I18nProvider');
  return ctx;
}
