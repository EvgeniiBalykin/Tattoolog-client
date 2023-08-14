const REQUIRED_FIELD = 'This field is required';
const REG_EXP_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const REG_EXP_PASSWORD = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/;

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Incorrect name';
    }

    return true;
  },
};

export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!REG_EXP_EMAIL.test(value)) {
      return 'Invalid email format';
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters';
    }

    if (!REG_EXP_PASSWORD.test(value)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one digit';
    }

    return true;
  },
};
