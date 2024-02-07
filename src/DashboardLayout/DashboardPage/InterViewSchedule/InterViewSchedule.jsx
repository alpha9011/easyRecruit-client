import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";


const localizer = momentLocalizer(moment); // or globalizeLocalizer

const InterViewSchedule = () => {

  // const [selectedData, setSelectedData] = useState({});

  // const [selectedSlotStyle, setSelectedSlotStyle] = useState({});

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

  // const handleSelectSlot = ({ start, end }) => {
  //   setSelectedSlotStyle({
  //     backgroundColor: "rgba(0, 123, 255, 0.5)", // Adjust the color as needed
  //     borderRadius: "3px",
  //   });

  //   setSelectedData({ start, end });
  // };
  // const handleSaveEvent = (title) => {
  //   const newEvent = { title, ...selectedData };
  //   setEvents([...events, newEvent]);

  //   // Handle the selected data as needed
  //   console.log("Selected Event:", newEvent);
  // };
  return (
    <>
      <div >
        <h2 className="text-center font-bold text-3xl text-white opacity-90 my-3">
          Interview Schedule
        </h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          // onSelectSlot={handleSelectSlot}
          className="bg-white rounded-xl md:p-3 font-bold"
        />
      </div>
    </>
  );
};

export default InterViewSchedule;
