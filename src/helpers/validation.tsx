import i18next from 'i18next';

const REQUIRED_FIELD = 'This field is required';
const REG_EXP_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const REG_EXP_PASSWORD = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/;

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string): boolean => {
    if (value.match(/[а-яА-Я]/)) {
      return i18next.t('validation.error_name');
    }

    return true;
  },
};

export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string): boolean => {
    if (!REG_EXP_EMAIL.test(value)) {
      return i18next.t('validation.error_email');
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string): boolean => {
    if (value.length < 8) {
      return i18next.t('validation.error_password');
    }

    if (!REG_EXP_PASSWORD.test(value)) {
      return i18next.t('validation.error_password_2');
    }

    return true;
  },
};
