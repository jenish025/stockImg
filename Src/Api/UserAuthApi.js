import { ACCESS_TOKEN } from '../Redux/ReduxConst';

export const getUserTokenData = (url) => {
  return (dispatch) => {
    var requestOptions = {
      method: 'POST',
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch({
          type: ACCESS_TOKEN,
          data: JSON.parse(result),
        });
        return result;
      })
      .catch((error) => console.log('error', error));
  };
};
