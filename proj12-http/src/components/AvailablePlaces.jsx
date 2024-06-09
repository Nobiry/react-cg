import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        // navigator.geolocation.getCurrentPosition((pos) => {
        //   const sortedPlaces = sortPlacesByDistance(
        //     resData.places,
        //     pos.coords.latitude,
        //     pos.coords.longitude
        //   );
        //   setAvailablePlaces(sortedPlaces);
        //   setIsFetching(false);
        // });
        setTimeout(() => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            54.718295984672004,
            55.99362426621539
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        }, 1000);
      } catch (err) {
        setError({
          message:
            err.message || "Could not fetch plaaces, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

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
