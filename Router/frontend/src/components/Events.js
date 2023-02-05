import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function Events() {
 const events = useLoaderData()

  return (
    <>
      {/* <EventsList  /> */}
      <p>czy teraz działa</p>
    </>
  );
}

export default Events;