import { getFeaturedEvents } from "../heplers/api-utils";
import EventList from "../components/events/EventList";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 60,
  };
}

export default Home;
