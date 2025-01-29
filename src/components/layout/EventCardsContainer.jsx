import EventHomeCard from "@/components/ui/EventHomeCard";
import "./EventCardsContainer.css";

const EventCardsContainer = ({events = []}) => {
    return (
        <>
            <div className="events-container">
                {events.map((event, index) => (
                    <EventHomeCard key={index} event={event} />
                ))}
            </div>
        </>
    )
}

export default EventCardsContainer;