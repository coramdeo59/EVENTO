import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import EventsList from "@/components/events-list";

type EventParamsPage = {
    params: {
        city: string
    }
}

export default async function EventPage({ params }: EventParamsPage) {
    const city = params.city;
    const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
    const events: EventoEvent[] = await response.json();

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1>
                {city === "all" ? "All Events" : `Event ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>
            <EventsList events={events} />
        </main>
    );
}