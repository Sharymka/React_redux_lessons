import { useSelector } from "react-redux";
import { getDogs } from "../store/DogsReduser/selector";
import { getError } from "../store/ErrorReducer/selector";

export default function DogsPage() {
  const dogs = useSelector(getDogs);
  const error = useSelector(getError);

  if (error.errorMessage) {
    return (
      <>
        <h3>{error.errorMessage}</h3>
        <button>Retry</button>
      </>
    );
  }

  return (
    <div className="container">
      <img src={dogs.url} alt="Dogs" />
    </div>
  );
}
