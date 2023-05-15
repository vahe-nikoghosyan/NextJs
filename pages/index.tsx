import { getFeaturedEvents } from "../data/dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Home Page</h1>
      <ul></ul>
    </div>
  );
}

export default Home;
