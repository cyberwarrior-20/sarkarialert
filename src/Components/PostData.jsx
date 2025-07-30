import React from 'react'
import { useParams } from 'react-router-dom';
import { postData } from '../postData';

const PostData = () => {
    const { id } = useParams();
    const filteredData = postData.find((post) => post.id === parseInt(id));

    // CSS-in-JSX Styles
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
        lineHeight: '1.6',
        color: '#333',
       
        minHeight: '100vh',
    };

    const cardStyle = {
        backgroundColor: 'white',

        padding: '30px',
        marginBottom: '20px',
    
        border: 'none',   // No border
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '20px',
        marginTop: '0',
        textAlign: 'center',
        borderBottom: '3px solid #3498db',
        paddingBottom: '15px',
    };

    const sectionTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#34495e',
        marginTop: '30px',
        marginBottom: '15px',
        borderLeft: '4px solid #3498db',
        paddingLeft: '15px',
    };

    const paragraphStyle = {
        margin: '10px 0',
        fontSize: '1.1rem',
        color: '#555',
    };

    const listStyle = {
        margin: '15px 0',
        paddingLeft: '20px',
    };

    const listItemStyle = {
        margin: '8px 0',
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.5',
    };

    const highlightBoxStyle = {
        backgroundColor: '#e8f4f8',
        border: '1px solid #3498db',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        fontSize: '1.1rem',
        fontWeight: '500',
        color: '#2c3e50',
    };

    const noteBoxStyle = {
        backgroundColor: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        fontSize: '1rem',
        color: '#856404',
    };

    const contactBoxStyle = {
        backgroundColor: '#d4edda',
        border: '1px solid #28a745',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
    };

    const linkStyle = {
        color: '#3498db',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'color 0.3s ease',
    };

    const infoRowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        margin: '20px 0',
    };

    const infoCardStyle = {
        flex: '1 1 300px',
        backgroundColor: '#f8f9fa',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #dee2e6',
        minWidth: '250px',
    };

    const labelStyle = {
        fontWeight: '600',
        color: '#2c3e50',
        marginRight: '5px',
    };

    const valueStyle = {
        color: '#555',
    };

    const thankYouStyle = {
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#27ae60',
        margin: '30px 0',
        padding: '20px',
        backgroundColor: '#d5f4e6',
        borderRadius: '8px',
        border: '1px solid #27ae60',
    };

    // Responsive styles
    const isMobile = window.innerWidth <= 768;
    const responsiveContainerStyle = {
        ...containerStyle,
        padding: isMobile ? '10px' : '20px',
    };

    const responsiveCardStyle = {
        ...cardStyle,
        padding: isMobile ? '20px' : '30px',
    };

    const responsiveTitleStyle = {
        ...titleStyle,
        fontSize: isMobile ? '2rem' : '2.5rem',
    };

    if (!filteredData) {
        return (
            <div style={responsiveContainerStyle}>
                <div style={responsiveCardStyle}>
                    <h1 style={responsiveTitleStyle}>Post Not Found</h1>
                    <p style={paragraphStyle}>The requested job post could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div style={responsiveContainerStyle}>
            <div style={responsiveCardStyle}>
                <h1 style={responsiveTitleStyle}>{filteredData?.title}</h1>
                
                <p style={{...paragraphStyle, fontSize: '1.2rem', marginBottom: '25px'}}>
                    {filteredData?.content}
                </p>

                <div style={infoRowStyle}>
                    <div style={infoCardStyle}>
                        <span style={labelStyle}>📍 Location:</span>
                        <span style={valueStyle}>{filteredData?.location}</span>
                    </div>
                    <div style={infoCardStyle}>
                        <span style={labelStyle}>🕒 Interview Time:</span>
                        <span style={valueStyle}>{filteredData?.interview_time}</span>
                    </div>
                </div>

                <h2 style={sectionTitleStyle}>💼 Position Details</h2>
                <div style={infoRowStyle}>
                    <div style={infoCardStyle}>
                        <span style={labelStyle}>Position:</span>
                        <span style={valueStyle}>{filteredData?.position.name}</span>
                    </div>
                    <div style={infoCardStyle}>
                        <span style={labelStyle}>Qualification:</span>
                        <span style={valueStyle}>{filteredData?.position.qualification}</span>
                    </div>
                    <div style={infoCardStyle}>
                        <span style={labelStyle}>Age Limit:</span>
                        <span style={valueStyle}>{filteredData?.position.age_limit}</span>
                    </div>
                    <div style={infoCardStyle}>
                        <span style={labelStyle}>💰 Salary:</span>
                        <span style={valueStyle}>{filteredData?.position.salary}</span>
                    </div>
                </div>

                <h2 style={sectionTitleStyle}>📋 Requirements</h2>
                <ul style={listStyle}>
                    {filteredData?.position.requirements.map((req, index) => (
                        <li key={index} style={listItemStyle}>{req}</li>
                    ))}
                </ul>

                <h2 style={sectionTitleStyle}>🎁 Benefits</h2>
                <ul style={listStyle}>
                    {filteredData?.benefits.map((benefit, index) => (
                        <li key={index} style={listItemStyle}>{benefit}</li>
                    ))}
                </ul>

                <h2 style={sectionTitleStyle}>📄 Documents Required</h2>
                <ul style={listStyle}>
                    {filteredData?.documents_required.map((doc, index) => (
                        <li key={index} style={listItemStyle}>{doc}</li>
                    ))}
                </ul>

                <h2 style={sectionTitleStyle}>🏢 Interview Venue</h2>
                <div style={infoCardStyle}>
                    <span style={labelStyle}>Address:</span>
                    <span style={valueStyle}>{filteredData?.interview_venue.address}</span>
                </div>

                <h2 style={sectionTitleStyle}>📞 Contact Information</h2>
                <div style={contactBoxStyle}>
                    <p style={paragraphStyle}>
                        <span style={labelStyle}>HR Contact:</span>
                        <span style={valueStyle}>{filteredData?.contact.hr_contact}</span>
                    </p>
                    <p style={paragraphStyle}>
                        <span style={labelStyle}>Raj Kumar:</span>
                        <span style={valueStyle}>{filteredData?.contact.raj_kumar}</span>
                    </p>
                </div>

                {filteredData?.highlight && (
                    <>
                        <h2 style={sectionTitleStyle}>⭐ Highlight</h2>
                        <div style={highlightBoxStyle}>{filteredData?.highlight}</div>
                    </>
                )}

                {filteredData?.note && (
                    <>
                        <h2 style={sectionTitleStyle}>📝 Important Note</h2>
                        <div style={noteBoxStyle}>{filteredData?.note}</div>
                    </>
                )}

                <h2 style={sectionTitleStyle}>🌟 Why Choose Us</h2>
                <ul style={listStyle}>
                    {filteredData?.why_choose_us.map((reason, index) => (
                        <li key={index} style={listItemStyle}>{reason}</li>
                    ))}
                </ul>

                <div style={thankYouStyle}>
                    <p style={{margin: '10px 0'}}>
                        For more details, visit our{' '}
                        <a 
                            href="https://mysarkarialert.com" 
                            style={linkStyle}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseOver={e => e.target.style.color = '#2980b9'}
                            onMouseOut={e => e.target.style.color = '#3498db'}
                        >
                            website
                        </a>.
                    </p>
                    <p style={{margin: '10px 0', fontWeight: '700'}}>
                        Thank you for your interest in our job posting! 🎉
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostData;
