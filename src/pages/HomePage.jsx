import { selectAllEvents } from '@/services/formSlice'
import { useSelector } from 'react-redux';
import React from 'react'
import EventCardsContainer from '@/components/layout/EventCardsContainer';
import "./HomePage.css"

const HomePage = () => {

  const forms = useSelector(selectAllEvents);

  return (
    <>
      <h1 className="home-page-header">Your Events: </h1>
      {forms.length === 0 ? (
        <p>No events to display</p>
      ) : (
        <EventCardsContainer events={forms} />
      )}
    </>
  )
}

export default HomePage