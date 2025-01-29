import { Button } from "@/components/ui/button";
import RightArrow from "@/assets/right-arrow.svg";

const EventHomeCard = ({ event }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  const formatDate = (date_string) => {
    const formattedDate = new Date(date_string).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    console.log(formattedDate);
    return formattedDate;
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border m-5">
        <div className="text-xl font-semibold text-gray-800">
          {event.event_name}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-600">
            {`${formatDate(event.date_from)} - ${formatDate(event.date_to)}`}
          </div>
          <div className="ml-4">
            <Button onClick={handleClick} variant="ghost">
              <img
                src={RightArrow}
                alt="Right Arrow"
                className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHomeCard;
