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
  const [date2, setDate2] = useState("");
  const [time2, setTime2] = useState("");
  const dateTimeString = date + " " + time;
  const dateTimeString2 = date2 + " " + time2;
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
      start: new Date(dateTimeString),
      end: new Date(dateTimeString2),
    },
    {
      title: "Interview 4",
      start: "Wed Mar 06 2024 13:59:00 GMT+0600 (Bangladesh Standard Time)",
      end: "Tue Feb 27 2024 14:59:00 GMT+0600 (Bangladesh Standard Time)",
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
  // Event handlers to update the state variables
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDateChange2 = (event) => {
    setDate2(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleTimeChange2 = (event) => {
    setTime2(event.target.value);
  };

  // const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the date and time values, such as sending them to a server

    const start = new Date(date + "T" + time);
    const end = new Date(date + "T" + time2);

    const newEvent = { title: "interview 4", start, end };
    setEvents([...events, newEvent]);
    console.log("new", newEvent);
    console.log(dateTimeString);
    console.log(dateTimeString2);
  };
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().split('T')[0];
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-3xl text-white opacity-90 my-3">
          Interview Schedule
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Date input */}
          {/* start date and time */}
          <input
            type="date"
            className="rounded-xl"
            value={date}
            onChange={handleDateChange}
            min={minDate} 
          />
          {/* Time input */}
          <input type="time" value={time} onChange={handleTimeChange} />

          {/* End date and time */}

          {/* Date input */}

          {/* Time input */}
          <input type="time" value={time2} onChange={handleTimeChange2} />

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
