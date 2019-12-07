export const VALIDATION_RULES = {
  phone: /(\+7|8)(\d{3})(\d{3})(\d{2})(\d{2})/i,
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
};

export const FORMS = {
  CREATE_ACCOUNT: "create-account-form",
  FEEDBACK: "feedback-form"
};

export const EVENT_TYPES = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  MODAL_IS_OPENED: "MODAL_IS_OPENED",
  MODAL_IS_CLOSED: "MODAL_IS_CLOSED",
  FEEDBACK_FORM_SUBMITTED: "FEEDBACK_FORM_SUBMITTED"
};
