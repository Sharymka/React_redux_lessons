import { ADD_DOGS } from '../constants/dogs';
import { getErrorAction } from './error_actions';

let count = 0;

export const addDogsAction = (dogs) => ({
  type: ADD_DOGS,
  payload: dogs.message,
  status: dogs.status,
});

export const getDogsAction = () => async (dispatch) => {
  console.log(count);
  dispatch(getErrorAction(''));
  try {
    const url = count > 3
      ? 'https://dog.ceo/api/breeds/image/random'
      : 'https://do3g.ceo/api/breeds/image/random';

    console.log(url);

    const response = await fetch(url);
    const dogs = await response.json();
    if (!response.ok) {
      throw new Error('Bad Response');
    }
    dispatch(addDogsAction(dogs));
  } catch (err) {
    const error = new Error('Internal Server Error');
    dispatch(getErrorAction(error.message));
  }
  count += 1;
};
