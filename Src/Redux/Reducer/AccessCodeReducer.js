import { ACCESS_CODE } from '../ReduxConst';

const initialState = {
  accessCode: '',
};

export const AccessCodeReducer = (state = initialState, payload) => {
  const { type, data } = payload;

  switch (type) {
    case ACCESS_CODE:
      return (state = data);

    default:
      return state;
  }
};
