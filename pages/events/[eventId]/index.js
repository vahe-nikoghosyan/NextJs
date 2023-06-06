import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../data/dummy-data";

import EventLogistics from "../../../components/event-detail/event-logistics";
import EventSummary from "../../../components/event-detail/event-summary";
import EventContent from "../../../components/event-detail/event-content";
import ErrorAlert from "../../../components/ui/error-alert";
import { getFeaturedEvents } from "../../../heplers/api-utils";

function EventDetail(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <>
        <div className="center">
          <p>Loading ...</p>
        </div>
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
    revalidate: 30,
  };
}

export async function getStaticPaths(context) {
  const featuredEvents = await getFeaturedEvents();
  const paths = featuredEvents.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetail;
