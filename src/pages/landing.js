import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";

const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
  return {
    id,
    startTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        9,
        0,
        0,
        0
      )
    ),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        17,
        0,
        0,
        0
      )
    ),
  };
});





const Landing = () => {
	
	const [selectedDate, setDate] = useState(null);
	
	function Taskcreate(date) {

		const [task, setTask] = useState();
		const [time, setTime] = useState(new Date(date.date))

		return (
			<div>
				{/* Style this page */}
				{/* Use time variable to send the request to backen */}
				{/* ADD form here 
					- title 
					- description
				*/}
				{/* Submit button, onPress sends the task data to backend

					Send time, title, description in a POST request to backend
				
				*/}
			</div>
		)
	}

	function MeetingCreate() {
		return (<div
		style={{
		  display: "flex",
		  justifyContent: "Right",
		  alignItems: "Right",
		  height: "100vh",
		}}
	  >
		<h1>Select meeting timings</h1>
	
		<ScheduleMeeting
		  borderRadius={10}
		  primaryColor="#3f5b85"
		  eventDurationInMinutes={30}
		  availableTimeslots={availableTimeslots}
		  onStartTimeSelect={(time) => setDate(time)}
		/>
	  </div>)
	}

	if (selectedDate){
		return <Taskcreate date={selectedDate.startTime}/>
	}

	return <MeetingCreate />;
};

export default Landing;
