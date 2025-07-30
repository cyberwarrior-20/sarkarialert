// Components/FloatingButtons.jsx
import React, { useState } from 'react';

const FloatingButtons = () => {
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [telegramHover, setTelegramHover] = useState(false);


  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const message = 'Hello! I found your website and would like to know more about job opportunities.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTelegramClick = () => {
    const telegramUsername = 'yourusername'; // Replace with your Telegram username
    const telegramUrl = `https://t.me/${telegramUsername}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  // Responsive check
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth <= 768;

  // CSS-in-JSX Styles
  const containerStyle = {
    position: 'fixed',
    bottom: isMobile ? '15px' : isTablet ? '20px' : '30px',
    right: isMobile ? '15px' : isTablet ? '20px' : '30px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  };

  const buttonStyle = {
    width: isMobile ? '55px' : isTablet ? '58px' : '60px',
    height: isMobile ? '55px' : isTablet ? '58px' : '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    border: 'none',
    outline: 'none',
    animation: 'pulse 3s infinite',
    position: 'relative',
  };

  const whatsappButtonStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #25D366, #128C7E)',
    boxShadow: whatsappHover 
      ? '0 8px 30px rgba(37, 211, 102, 0.6)' 
      : '0 4px 20px rgba(37, 211, 102, 0.4)',
    transform: whatsappHover ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
  };

  const telegramButtonStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #0088cc, #0066cc)',
    boxShadow: telegramHover 
      ? '0 8px 30px rgba(0, 136, 204, 0.6)' 
      : '0 4px 20px rgba(0, 136, 204, 0.4)',
    transform: telegramHover ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
  };

  const iconStyle = {
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const tooltipStyle = {
    position: 'absolute',
    right: '70px',
    background: 'rgba(0, 0, 0, 0.9)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
    transform: 'translateX(10px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  };

  const tooltipVisibleStyle = {
    ...tooltipStyle,
    opacity: 1,
    transform: 'translateX(0)',
  };

  return (
    <>
      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% {
              box-shadow: 0 4px 25px rgba(37, 211, 102, 0.8);
            }
            100% {
              box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>

      <div style={containerStyle}>
        {/* WhatsApp Button */}
        <button 
          style={whatsappButtonStyle}
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setWhatsappHover(true)}
          onMouseLeave={() => setWhatsappHover(false)}
          onTouchStart={() => setWhatsappHover(true)}
          onTouchEnd={() => setWhatsappHover(false)}
          aria-label="Contact us on WhatsApp"
        >
          <span style={{
            ...iconStyle,
            transform: whatsappHover ? 'scale(1.2)' : 'scale(1)',
          }}>
            {/* WhatsApp Brand Icon - Option 1 */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382C17.299 14.382 17.127 14.319 16.99 14.193L15.894 13.097C15.621 12.824 15.185 12.824 14.912 13.097C14.775 13.234 14.602 13.302 14.429 13.302C14.256 13.302 14.083 13.234 13.946 13.097L12.85 14.193C12.713 14.319 12.541 14.382 12.368 14.382C11.822 14.382 11.382 13.942 11.382 13.396V7.604C11.382 7.058 11.822 6.618 12.368 6.618H17.472C18.018 6.618 18.458 7.058 18.458 7.604V13.396C18.458 13.942 18.018 14.382 17.472 14.382Z"/>
              <path d="M12.92 2C7.48 2 3.08 6.4 3.08 11.84C3.08 13.54 3.53 15.19 4.38 16.62L2.91 21.26C2.84 21.5 2.92 21.76 3.12 21.9C3.22 21.96 3.33 22 3.45 22C3.54 22 3.63 21.98 3.71 21.93L8.5 19.99C9.87 20.75 11.4 21.14 12.92 21.14C18.36 21.14 22.76 16.74 22.76 11.3C22.76 5.86 18.36 1.46 12.92 1.46V2ZM12.92 19.76C11.81 19.76 10.69 19.46 9.7 18.88L9.61 18.83L5.67 20.38L7.24 16.62L7.18 16.53C6.53 15.51 6.2 14.33 6.2 13.12C6.2 8.17 10.26 4.11 15.21 4.11C20.16 4.11 24.22 8.17 24.22 13.12C24.22 18.07 20.16 22.13 15.21 22.13L12.92 19.76Z"/>
            </svg>
          </span>
          
          {/* Tooltip */}
          {!isMobile && (
            <span 
              style={whatsappHover ? tooltipVisibleStyle : tooltipStyle}
            >
              Chat on WhatsApp
              <span style={{
                content: '',
                position: 'absolute',
                left: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                border: '6px solid transparent',
                borderLeftColor: 'rgba(0, 0, 0, 0.9)',
              }}></span>
            </span>
          )}
        </button>
        
        {/* Telegram Button */}
        <button 
          style={telegramButtonStyle}
          onClick={handleTelegramClick}
          onMouseEnter={() => setTelegramHover(true)}
          onMouseLeave={() => setTelegramHover(false)}
          onTouchStart={() => setTelegramHover(true)}
          onTouchEnd={() => setTelegramHover(false)}
          aria-label="Contact us on Telegram"
        >
          <span style={{
            ...iconStyle,
            transform: telegramHover ? 'scale(1.2)' : 'scale(1)',
          }}>
            {/* Telegram Paper Plane Icon - Option 1 */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 20.3L12.5 18.6L15.1 16L12.5 13.4L14.2 11.7L18.5 16L14.2 20.3Z" fill="none"/>
              <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"/>
            </svg>
          </span>
          
          {/* Tooltip */}
          {!isMobile && (
            <span 
              style={telegramHover ? tooltipVisibleStyle : tooltipStyle}
            >
              Join Telegram
              <span style={{
                content: '',
                position: 'absolute',
                left: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                border: '6px solid transparent',
                borderLeftColor: 'rgba(0, 0, 0, 0.9)',
              }}></span>
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
