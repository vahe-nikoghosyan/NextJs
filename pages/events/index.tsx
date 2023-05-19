import { getAllEvents } from "../../data/dummy-data";

import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

function Events() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default Events;
