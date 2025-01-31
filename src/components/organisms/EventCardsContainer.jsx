import EventHomeCard from "@/components/molecules/EventHomeCard";

const EventCardsContainer = ({ events = [] }) => {
  return (
    <>
      <div className="p-4 flex flex-col justify-center xl:grid xl:grid-cols-3 ">
        {events.map((event, index) => (
          <EventHomeCard key={index} event={event} />
        ))}
      </div>
    </>
  );
};

export default EventCardsContainer;
