import { useFetch } from "../hooks/useFetch.js";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    setTimeout(() => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        54.718295984672004,
        55.99362426621539
      );

      resolve(sortedPlaces);
    }, 1000);
  });
}

// navigator.geolocation.getCurrentPosition((pos) => {
//   const sortedPlaces = sortPlacesByDistance(
//     resData.places,
//     pos.coords.latitude,
//     pos.coords.longitude
//   );
//   setAvailablePlaces(sortedPlaces);
//   setIsFetching(false);
// });

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
