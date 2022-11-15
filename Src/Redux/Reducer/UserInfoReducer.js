import { USER_INFO } from "../ReduxConst";

const initialState = {

  };
  
  export const UserInfoReducer = (state = initialState, payload) => {
    const { type, data } = payload;
  
    switch (type) {
      case USER_INFO:
        return (state = data);
  
      default:
        return state;
    }
  };