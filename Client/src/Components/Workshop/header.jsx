import React from 'react';

const Header = () => {
    const nextMeeting = {
        date: "Sunday, Dec 10, 2023",
        time: "10:00 AM - 11:00 AM",
        description: "Weekly Parinaya Workshop Meeting",
        link: "https://meet.google.com/your-meeting-link"
    };

    return (
        <header style={{ textAlign: "center", padding: "20px", backgroundColor: "#f7e6f2" }}>
            <h1>Upcoming Google Meet</h1>
            <p><strong>Date:</strong> {nextMeeting.date}</p>
            <p><strong>Time:</strong> {nextMeeting.time}</p>
            <p><strong>Description:</strong> {nextMeeting.description}</p>
            <a 
                href={nextMeeting.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#4a90e2", fontSize: "18px", fontWeight: "bold" }}
            >
                Join Meeting
            </a>
        </header>
    );
};

export default Header;
