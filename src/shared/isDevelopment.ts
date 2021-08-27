const isDevelopment = (
  typeof process !== 'undefined' && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
)

export default isDevelopment
