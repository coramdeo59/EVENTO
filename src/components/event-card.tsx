import React from 'react';
import { EventoEvent } from "@/lib/types";

type EventCardProps = {
    event: EventoEvent;
}

const EventCard = ({ event }: EventCardProps) => {
    return (
        <section>
            <div key={event.id}>
                {event.name}
            </div>
        </section>
    );
};

export default EventCard;