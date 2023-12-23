import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MainView = () => {
    const events = [
        {
            title: "Meeting with Client",
            start: new Date(2023, 9, 18, 13, 0), // 1:00 PM
            end: new Date(2023, 9, 18, 15, 0), // 3:30 PM
            resourceId: "John Doe", // Use "resourceId" instead of "resource"
        },
        {
            title: "Meeting with Client",
            start: new Date(2023, 9, 18, 13, 0), // 1:00 PM
            end: new Date(2023, 9, 18, 19, 0), // 3:30 PM
            resourceId: "ABC Doe", // Use "resourceId" instead of "resource"
        },
        {
            title: "Meeting with Client",
            start: new Date(2023, 9, 18, 13, 0), // 1:00 PM
            end:  new Date(2023, 9, 18, 15, 0), // 3:30 PM
            resourceId: "JCDJ Doe", // Use "resourceId" instead of "resource"
        },
        // Add more events with different team members
    ];

    const resources = [
        { id: "John Doe", title: "John Doe" },
        { id: "ABC Doe", title: "ABC Doe" },
        { id: "JCDJ Doe", title: "JCDJ Doe" },
        // Add more team members as needed
    ];

    const views = {
        day: true, // Show only the day view
    };

    return (
        <div style={{ height: "500px" }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="day" // Set the default view to "day"
                views={views} // Specify the views you want to show
                resources={resources}
                resourceIdAccessor="id"
                resourceTitleAccessor="title"
                resourceAccessor="resourceId"
            />
        </div>
    );
};

export default MainView;
