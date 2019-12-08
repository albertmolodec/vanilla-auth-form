export const VALIDATION_RULE = {
  phone: {
    regex: /(^[+]\d+(?:\d+)*)/,
    errorMessage: "Please write correct phone number"
  },
  email: {
    regex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    errorMessage: "Please write correct email"
  },
  "company-size": {
    errorMessage: "Please select one of the options"
  }
};

export const FORM_NAME = {
  CREATE_ACCOUNT: "create-account",
  FEEDBACK: "feedback"
};

export const EVENT_TYPE = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  MODAL_IS_OPENED: "MODAL_IS_OPENED",
  MODAL_IS_CLOSED: "MODAL_IS_CLOSED"
};
