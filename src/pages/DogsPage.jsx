import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getDogsAction } from '../actions';
import { getDogs } from '../store/DogsReduser/selector';
import { getError } from '../store/ErrorReducer/selector';

export default function DogsPage() {
  const dogs = useSelector(getDogs);
  const error = useSelector(getError);

  const requestDogs = useCallback(() => {
    getDogsAction();
  }, []);

  if (error.errorMessage) {
    return (
      <>
        <h3>{error.errorMessage}</h3>
        <button onClick={requestDogs}>Retry</button>
      </>
    );
  }

  return (
    <div className="container">
      <img src={dogs.url} alt="Dogs" />
    </div>
  );
}
