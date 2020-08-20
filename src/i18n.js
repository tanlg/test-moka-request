import { unpackCatalog, setupI18n } from 'lingui-i18n';
import enUsMessages from './lingui/en_US/messages';
import zhCnMessages from './lingui/zh_CN/messages';

export const LOCALES = {
  ZH_CN: 'zh-CN',
  EN_US: 'en-US',
};

export const enUsI18n = setupI18n({
  catalogs: {
    [LOCALES.EN_US]: unpackCatalog(enUsMessages),
  },
  language: LOCALES.EN_US,
  development: process.env.NODE_ENV === 'development', // eslint-disable-line no-undef
});

export const zhCnI18n = setupI18n({
  catalogs: {
    [LOCALES.ZH_CN]: unpackCatalog(zhCnMessages),
  },
  language: LOCALES.ZH_CN,
  development: process.env.NODE_ENV === 'development', // eslint-disable-line no-undef
});

let defaultI18n = zhCnI18n;

export function getDefaultI18n() {
  return defaultI18n;
}

export function getDefaultLocale() {
  let locale = '';
  try {
    if (!locale && typeof document !== 'undefined') {
      locale = document.documentElement.lang;
    }

    if (!locale && typeof navigator !== 'undefined') {
      if (/en/i.test(navigator.language)) {
        locale = LOCALES.EN_US;
      } else if (/zh/i.test(navigator.language)) {
        locale = LOCALES.ZH_CN;
      }
    }

    if (!locale) {
      locale = LOCALES.ZH_CN;
    }
  } catch (e) {
    locale = LOCALES.ZH_CN;
  }

  return locale;
}

/**
 * 获取i18n实例
 *
 * 后端使用时,locale必填
 * 前段使用时,locale可选
 *
 * @param {string} [locale] - 如果不提供,则尝试从document中获取
 * @return {object} i18n instance
 */
export function getI18n(locale) {
  locale = locale || getDefaultLocale();

  switch (locale) {
    case LOCALES.EN_US:
      return enUsI18n;
    case LOCALES.ZH_CN:
      return zhCnI18n;
    // 传入的locale可能是default，如果是这样，则显示调整为对应的locale
    case 'default':
      return getI18n(getDefaultLocale());
    default:
      return zhCnI18n;
  }
}
