import EventForm from "../components/EventForm";

function NewEventPage() {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <EventForm method="POST" />
    </>
  );
}

export default NewEventPage;
