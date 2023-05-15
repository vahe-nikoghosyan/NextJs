import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/EventList";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Home;
