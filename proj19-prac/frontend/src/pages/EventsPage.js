import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );

  // const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;

  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const res = await fetch("http://localhost:8080/events");

  if (!res.ok) {
    // return { isError: true, message: "Could not fetch events." };

    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });

    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const res = new Response('any data', {status: 201});
    const resData = await res.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
