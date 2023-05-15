import EventItem from "./EventItem";

function EventList(props: { items: any[] }) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((event) => {
          return (
            <EventItem
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
              location={event.location}
              date={event.date}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default EventList;
