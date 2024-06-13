import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  return (
    <ul id="meals">
      {isLoading && <p className="center">Fetching meals...</p>}
      {error && <Error title="Failed to fetch meals" message={error} />}
      {!isLoading &&
        !error &&
        meals.map((meal) => <MealItem key={meal.name} meal={meal} />)}
    </ul>
  );
}

export default Meals;
