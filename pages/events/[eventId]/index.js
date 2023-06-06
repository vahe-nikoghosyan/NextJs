import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../data/dummy-data";

import EventLogistics from "../../../components/event-detail/event-logistics";
import EventSummary from "../../../components/event-detail/event-summary";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "../../../components/ui/error-alert";
import { getAllEvents } from "../../../heplers/api-utils";

function EventDetail(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found</p>
        </ErrorAlert>
      </>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
  };
}

export async function getStaticPaths(context) {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetail;
