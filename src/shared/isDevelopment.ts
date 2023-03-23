const isDevelopment = (
  typeof process !== 'undefined' && typeof process.env !== 'undefined' && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
)

export default isDevelopment
