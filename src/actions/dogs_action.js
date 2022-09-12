import { ADD_DOGS } from "../constants/dogs";
import { getErrorAction } from "./error_actions";

export const addDogsAction = (dogs) => ({
  type: ADD_DOGS,
  payload: dogs.message,
  status: dogs.status,
});

export const getDogsAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://do3g.ceo/api/breeds/image/random");
    const dogs = await response.json();
    console.log(dogs);
    if (!response.ok) {
      throw new Error("Bad Response");
    }
    dispatch(addDogsAction(dogs));
  } catch (err) {
    const error = new Error("Internal Server Error");
    dispatch(getErrorAction(error.message));
  }
};
