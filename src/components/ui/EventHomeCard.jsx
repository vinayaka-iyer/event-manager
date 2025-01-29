import { Button } from "@/components/ui/button"
import RightArrow from "@/assets/right-arrow.svg"
import "./EventHomeCard.css"

const EventHomeCard = ({ event }) => {
    const handleClick = () => {
        console.log('clicked');
    }

    const formatDate = (date_string) => {
        const formattedDate = new Date(date_string).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        console.log(formattedDate);
        return formattedDate;
    }


    return (
        <>
            <div className="event-card-container">
                <div className="event-card-header">
                    {event.event_name}
                </div>
                <div className="event-card-body">
                    <div className="event-card-date">
                        {`${formatDate(event.date_from)} - ${formatDate(event.date_to)}`}
                    </div>

                    <div className="event-card-arrow-btn">
                        <Button onClick={handleClick} variant="ghost">
                            <img src={RightArrow} alt="Right Arrow" clasName="right-arrow-btn" />
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventHomeCard;