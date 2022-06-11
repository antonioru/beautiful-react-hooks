const assertFunction = (fn) => {
  it('should be a function', () => {
    expect(fn).to.be.a('function')
  })
}

export default assertFunction
