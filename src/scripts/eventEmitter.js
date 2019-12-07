const eventEmitter = () => {
  const events = {};

  const on = (type, handler) => {
    if (!events[type]) events[type] = [];
    events[type] = [...events[type], handler];
  };

  const off = (type, handler) => {
    if (events[type]) {
      events[type] = events[type].filter(
        existingHandler => existingHandler !== handler
      );
    }
  };

  const emit = (type, args) => {
    if (events[type]) {
      events[type].map(handler => handler(args));
    }
  };

  return {
    on,
    off,
    emit
  };
};

export default eventEmitter;
