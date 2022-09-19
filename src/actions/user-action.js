import { getErrorAction } from '.';
import { fetchUser } from '../utils';
import { ADD_USER } from '../constants/user';

export const addUserAction = (user) => ({
  type: ADD_USER,
  payload: {
    email: user.email,
    token: user.accessToken,
    id: user.uid,
  },
});

export const fetchUserAction = (credentials) => async (dispatch) => {
  try {
    const user = await fetchUser(credentials.email, credentials.password);

    const action = addUserAction({
      email: user.email,
      accessToken: user.accessToken,
      uid: user.uid,
    });

    dispatch(action);
  } catch (error) {
    getErrorAction(error.message);
  }
};

