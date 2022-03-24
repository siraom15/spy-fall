import { createI18n } from 'vue-i18n';
import messages from './message';

const i18n = createI18n({
  locale: 'th',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
