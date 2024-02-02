import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const InterViewSchedule = () => {
 
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedSlotStyle, setSelectedSlotStyle] = useState({});
  const [events, setEvents] = useState([
    {
      start: moment("2024-02-01-18T11:00:00").toDate(),
      end: moment("2024-02-01-18T12:00:00").toDate(),
      title: "test event",
    },
    {
      title: "Inerview 1",
      start: new Date(2024, 1, 1, 10, 0), 
      end: new Date(2024, 1, 1, 12, 0),
    },
    {
      title: "Interview 2",
      start: new Date(2024, 1, 2, 14, 0),
      end: new Date(2024, 1, 2, 16, 0),
    },
  ]);

  // const handleSelect = ({ start, end }) => {
  //   const title = window.prompt("New Event name");
  //   if (title) {
  //     const newEvent = { title, start, end };
  //     setEvents([...events, newEvent]);

  //     console.log("Selected Event:", newEvent);
  //   }
  // };

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlotStyle({
      backgroundColor: 'rgba(0, 123, 255, 0.5)', // Adjust the color as needed
      borderRadius: '3px',
    });
    
    setSelectedData({ start, end });
  };
  const handleSaveEvent = (title) => {
    const newEvent = { title, ...selectedData };
    setEvents([...events, newEvent]);

    // Handle the selected data as needed
    console.log("Selected Event:", newEvent);
  };
  return (
    <>
      <div className=" bg-white p-5 shadow-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectSlot={handleSelectSlot}
        />
      </div>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body contentLabel="Event Modal">
          <div className="space-y-6">
            <p>
              Selected Time: {moment(selectedData.start).format("LLL")} -{" "}
              {moment(selectedData.end).format("LLL")}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSaveEvent(selectedData.title)}>
            Save Event
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InterViewSchedule;
