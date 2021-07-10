import {
  SIGNIN_USER_FAIL,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
} from "../constants/constant";

export const signReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_USER_REQUEST:
      return { loading: true };
    case SIGNIN_USER_SUCCESS:
      return { loading: false, fastifyuser: action.payload };
    case SIGNIN_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
