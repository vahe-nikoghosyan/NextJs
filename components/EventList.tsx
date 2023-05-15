import EventItem from "./EventItem";

function EventList(props: { items: any[] }) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((event) => {
          return <EventItem />;
        })}
      </ul>
    </div>
  );
}

export default EventList;
