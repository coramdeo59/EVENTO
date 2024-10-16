import { EventoEvent } from "@/lib/types";
import EventCard from "@/components/event-card";

type EventsListProps = {
    events: EventoEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
    return (
        <>
            {events.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
        </>
    );
};

export default EventsList;