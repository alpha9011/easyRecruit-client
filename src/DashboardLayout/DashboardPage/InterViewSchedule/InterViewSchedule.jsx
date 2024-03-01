import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const localizer = momentLocalizer(moment);

const InterViewSchedule = () => {
  // const [selectedData, setSelectedData] = useState({});

  // const [selectedSlotStyle, setSelectedSlotStyle] = useState({});

  // const handleSelectSlot = ({ start, end }) => {
  //   setSelectedSlotStyle({
  //     backgroundColor: "rgba(0, 123, 255, 0.5)",
  //     borderRadius: "3px",
  //   });

  //   setSelectedData({ start, end });
  // };
  // start 
  const axiosSecure = useAxiosSecure();

  const { data: appointmentInfo } = useQuery({
    queryKey: ["appointmentInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/interviewMessage`);
      return res.data;
    },
  });

  const events = appointmentInfo?.map((appointment) => ({
    title: appointment?.title,
    start: new Date(appointment?.start),
    end: new Date(appointment?.end),
  }));

  return (
    <>
      <div>
        <h2 className="text-center font-bold text-3xl text-white opacity-90 my-3">
          Interview Schedule
        </h2>

        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "70vh" }}
          selectable
          // onSelectSlot={handleSelectSlot}
          className="bg-white rounded-xl md:p-3 font-bold "
        />
      </div>
    </>
  );
};

export default InterViewSchedule;
