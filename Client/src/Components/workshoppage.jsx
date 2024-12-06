import React from 'react';

const WorkshopPage = () => {
    const workshopDetails = {
        title: "Boost Your Online Sales",
        date: "Saturday, Dec 16, 2023",
        time: "2:00 PM - 3:30 PM",
        description: "Learn effective e-commerce strategies to boost sales during the holiday season. From marketing tactics to customer retention, this workshop covers it all!",
        link: "https://meet.google.com/your-meeting-link",
        image: "https://via.placeholder.com/600x300.png?text=E-commerce+Workshop",
    };

    const googleCalendarLink = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
        workshopDetails.title
    )}&dates=20231216T140000Z/20231216T153000Z&details=${encodeURIComponent(
        workshopDetails.description
    )}&location=${workshopDetails.link}`;

    return (
        <div style={{ fontFamily: "'Arial', sans-serif", lineHeight: "1.6", color: "#333" }}>
            {/* Workshop Banner */}
            <div style={{ position: "relative", textAlign: "center", marginBottom: "20px" }}>
                <img
                    src={workshopDetails.image}
                    alt="E-commerce Workshop"
                    style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "8px",
                    }}
                >
                    <h1 style={{ fontSize: "36px", margin: "0" }}>{workshopDetails.title}</h1>
                    <p style={{ fontSize: "18px", margin: "10px 0" }}>Join us to elevate your e-commerce game!</p>
                </div>
            </div>

            {/* Workshop Details */}
            <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                <h2 style={{ textAlign: "center", color: "#444" }}>Workshop Details</h2>
                <p><strong>Date:</strong> {workshopDetails.date}</p>
                <p><strong>Time:</strong> {workshopDetails.time}</p>
                <p><strong>Description:</strong> {workshopDetails.description}</p>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <a
                        href={workshopDetails.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            borderRadius: "5px",
                            textDecoration: "none",
                            fontSize: "16px",
                            marginRight: "10px",
                        }}
                    >
                        Join Workshop
                    </a>
                    <a
                        href={googleCalendarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FF5722",
                            color: "#fff",
                            borderRadius: "5px",
                            textDecoration: "none",
                            fontSize: "16px",
                        }}
                    >
                        Add to Calendar
                    </a>
                </div>
            </div>

            {/* Call to Action Section */}
            <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", backgroundColor: "#e0f7fa" }}>
                <h2 style={{ marginBottom: "10px", color: "#00796B" }}>Shop Smart, Sell Smarter</h2>
                <p>
                    Check out our range of tools and resources to enhance your e-commerce journey.
                    Visit our <a href="/tools" style={{ color: "#00796B", textDecoration: "underline" }}>Tools & Resources</a> section for more!
                </p>
                <a
                    href="/shop-now"
                    style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#00796B",
                        color: "#fff",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontSize: "16px",
                    }}
                >
                    Explore Now
                </a>
            </div>
        </div>
    );
};

export default WorkshopPage;
