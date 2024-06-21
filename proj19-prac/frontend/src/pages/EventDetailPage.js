import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import { Suspense } from "react";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetailPage() {
  // const params = useParams();
  // const data = useRouteLoaderData("event-datial");
  
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      {/* <EventItem event={data.event} /> */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadEvent) => <EventItem event={loadEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const res = await fetch("http://localhost:8080/events/" + id);

  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await res.json();
    return resData.event;
  }
}

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

export async function loader({ req, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const eventId = params.eventId;

  const res = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!res.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
