const hasOwnProperty = (obj, prop) => (obj ? Object.prototype.hasOwnProperty.call(obj, prop) : false);

export default hasOwnProperty;
