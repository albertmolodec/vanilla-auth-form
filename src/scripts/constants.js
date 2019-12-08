export const VALIDATION_RULE = {
  phone: {
    regex: /^\+?\d+$/,
    errorMessage: "Please write correct phone number"
  },
  email: {
    regex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    errorMessage: "Please write correct email"
  },
};

export const FORM_NAME = {
  CREATE_ACCOUNT: "create-account",
  FEEDBACK: "feedback"
};

export const EVENT_TYPE = {
  MODAL: {
    OPEN: 'OPEN_MODAL',
    CLOSE: 'CLOSE_MODAL',
    IS_OPENED: 'MODAL_IS_OPENED',
    IS_CLOSED: 'MODAL_IS_CLOSED',
  },
  FORM: {
    CHANGED: 'FORM_VALUE_CHANGED',
    WARN: 'FORM_VALUE_WARN_ERROR',
    CONFIRM: 'FORM_VALUE_CONFIRM_INPUT',
    HIDE: 'FORM_VALUE_HIDE_MESSAGE',
  }
};
