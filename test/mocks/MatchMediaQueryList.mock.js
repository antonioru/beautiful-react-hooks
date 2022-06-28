const mediaQueryListMock = {
  listeners: {},
  matches: true,
  addEventListener(cb) {
    this.listeners.cb = cb
  },
  removeListener() {
    delete this.listeners.cb
  }
}

export default mediaQueryListMock;
