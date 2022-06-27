const createCookieStoreApiMock = () => {
  const store = {};

  const getItem = (key) => {
    return Promise.resolve({ name: key, value: store[key] });
  }

  const deleteItem = (key) => {
    delete store[key];

    return Promise.resolve();
  }

  const setItem = ({ name, value }) => {
    store[name] = value;

    return Promise.resolve();
  }

  return {
    get: getItem,
    set: setItem,
    delete: deleteItem,
  }
}

export default createCookieStoreApiMock();

