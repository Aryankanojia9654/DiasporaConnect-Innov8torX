import React from 'react';

const CalendarIntegration = () => {
    const googleCalendarLink = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Parinaya+Workshop+Google+Meet&dates=20231210T100000Z/20231210T110000Z&details=Join+our+weekly+workshop+Google+Meet+session&location=https://meet.google.com/your-meeting-link`;

    return (
        <div style={{ textAlign: "center", margin: "20px", padding: "20px", backgroundColor: "#e9f7ff" }}>
            <h2>Add to Google Calendar</h2>
            <p>
                Schedule this recurring meeting in your Google Calendar to receive reminders and ensure you 
                never miss a session!
            </p>
            <a 
                href={googleCalendarLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#34a853",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "16px"
                }}
            >
                Add to Google Calendar
            </a>
        </div>
    );
};

export default CalendarIntegration;
