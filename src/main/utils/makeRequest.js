import CONFIG from '../../config.js';

export const makeRequest = (path, requestType, dataObj = {}) => {
  const config = {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (Object.keys(dataObj).length) {
    config.body = JSON.stringify(dataObj);
  }

  return fetch(`${CONFIG.api}/${path}`, config);
};
