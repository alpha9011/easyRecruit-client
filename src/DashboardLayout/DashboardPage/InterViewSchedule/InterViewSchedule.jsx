import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const InterViewSchedule = () => {
  const [selectedData, setSelectedData] = useState({});

  const [selectedSlotStyle, setSelectedSlotStyle] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dateTimeString = date + " " + time;
  const [events, setEvents] = useState([
    
    {
      start: new Date(2022 - 10 - 2),
      end: moment("2024-02-01-18T12:00:00").toDate(),
      title: "test event",
    },
    {
      title: "Inerview 1",
      start: new Date(2024, 1, 3, 10, 0),
      end: new Date(2024, 1, 1, 12, 0),
    },
    {
      title: "Interview 2",
      start: new Date(2024, 1, 2, 14, 0),
      end: new Date(2024, 1, 2, 16, 0),
    },
    {
      title: "Interview 3",
      start: new Date(2024, 1, 2, 14, 0),
      end: dateTimeString,
    },

  ]);

  const components = {
    event: (props, event) => {
      console.log("props", props.event.start, event);
      return null;
    },
  };
  
  // console.log(events);
  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlotStyle({
      backgroundColor: "rgba(0, 123, 255, 0.5)",
      borderRadius: "3px",
    });

    setSelectedData({ start, end });
  };
  const handleSaveEvent = (title) => {
    const newEvent = { title, ...selectedData };
    setEvents([...events, newEvent]);

    // Handle the selected data as needed
    console.log("Selected Event:", newEvent);
  };

  //date and time

  const [selectedDateTime, setSelectedDataTime] = useState(new Date());
  const handleDateTimeChange = (date) => {
    setSelectedDataTime(date);
  };

 

  // Event handlers to update the state variables
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the date and time values, such as sending them to a server
    // console.log("Date:", date + " " + time);
    console.log(new Date(dateTimeString));
  };
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-3xl text-white opacity-90 my-3">
          Interview Schedule
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Date input */}
          <input
            type="date"
            className="rounded-xl"
            value={date}
            onChange={handleDateChange}
          />
          {/* Time input */}
          <input type="time" value={time} onChange={handleTimeChange} />
          {/* Button to submit the form */}
          <button type="submit">Submit</button>
        </form>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          // defaultView="agenda"
          // views={["month", "week", "day"]}
          // date={moment("2024-10-02").toDate()}
          // toolbar={false}
          max={moment("2024-03-24T18:00:00").toDate()}
          min={moment("2024-03-28T08:00:00").toDate()}
          components={components}
          selectable
          onSelectSlot={handleSelectSlot}
          className="bg-white rounded-xl md:p-3 font-bold"
        />
      </div>
    </>
  );
};

export default InterViewSchedule;
