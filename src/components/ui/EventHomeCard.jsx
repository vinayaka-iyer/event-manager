import {Button} from "@/components/ui/button"
import RightArrow from "@/assets/right-arrow.svg"
import "./EventHomeCard.css"

const EventHomeCard = ({event}) => {
    const handleClick =()=>{
        console.log('clicked');
    }
    
    return (
        <>
            <div className="event-card-container">
                <div className="event-card-header">
                    {event.event_name}
                </div>
                <div className="event-card-body">
                    <div className="event-card-date">
                        {event.date_from}
                    </div>
                    <div className="event-card-arrow-btn">
                        <Button onClick={handleClick} variant="ghost">
                            <img src={RightArrow} alt="Right Arrow" clasName="right-arrow-btn"/>
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventHomeCard;