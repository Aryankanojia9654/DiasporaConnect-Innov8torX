import React from 'react';

const GoogleMeetDetails = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px", padding: "20px", backgroundColor: "#f2f2f2" }}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Google_Meet_icon_%282020%29.svg/1024px-Google_Meet_icon_%282020%29.svg.png" 
                alt="Google Meet" 
                style={{ width: "150px", marginBottom: "20px" }}
            />
            <h2>Google Meet Information</h2>
            <p>
                This Google Meet session is scheduled every Sunday for participants to join the 
                Parinaya Workshops. Ensure you have a stable internet connection and prepare in advance 
                for the discussion topics.
            </p>
            <p>
                <strong>Duration:</strong> 1 hour (10:00 AM - 11:00 AM)
            </p>
            <a 
                href="https://meet.google.com/your-meeting-link" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#4a90e2", fontSize: "16px" }}
            >
                Click here to join the Google Meet
            </a>
        </div>
    );
};

export default GoogleMeetDetails;
