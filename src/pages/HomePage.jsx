import { selectAllEvents } from "@/services/events/formSlice";
import { useSelector } from "react-redux";
import React from "react";
import EventCardsContainer from "@/components/organisms/EventCardsContainer";

const HomePage = () => {
  const forms = useSelector(selectAllEvents);

  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center my-5">Your Events</h1>
        <div className="flex flex-col gap-6 max-w-3/5 mx-auto mt-5">
          {forms.length === 0 ? (
            <p>No events to display</p>
          ) : (
            <EventCardsContainer events={forms} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
