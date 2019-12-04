export default class {
  constructor() {
    const self = new Proxy(this, {
      get(ctx, prop) {
        console.log(ctx, prop)
        return ctx[prop];
      },
      set(ctx, prop, value) {
        console.log(ctx, prop, value)
        ctx[prop] = val;
        return true;
      }
    });

    this.target = null;
    this.render = this.render.bind(self);

    return self;
  }
}
