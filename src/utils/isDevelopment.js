const isDevelopment = (process && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'));

export default isDevelopment;
