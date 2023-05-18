import EventItem from "./EventItem";

import classes from "./event-list.module.css";
function EventList(props: { items: any[] }) {
  const { items } = props;
  return (
    <ul className={classes.list}>
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
  );
}

export default EventList;
