import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../data/dummy-data";

function Events() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default Events;
