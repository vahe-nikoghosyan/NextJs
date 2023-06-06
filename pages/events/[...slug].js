import { useRouter } from "next/router";
import { getFilteredEvents } from "../../heplers/api-utils";

import ResultTitle from "../../components/results-title/results-title";
import EventList from "../../components/events/EventList";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEvents(props) {
  const router = useRouter();

  // const filterData = router.query.slug;
  //
  // if (!filterData) {
  //   return <p className="center">Loading ...</p>;
  // }
  //
  // const filteredYear = Number(filterData[0]);
  // const filteredMonth = Number(filterData[1]);

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>;
          <div className="center">
            <Button link={"/events"}>Show all events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  const { filteredEvents } = props;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No event found</p>
          <div className="center">
            <Button link={"/events"}>Show all events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const year = Number(filterData[0]);
  const month = Number(filterData[1]);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: "/error"
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year,
    month,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year,
        month,
      },
    },
  };
}

export default FilteredEvents;
