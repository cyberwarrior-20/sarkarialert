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

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-8px);
            }
            60% {
              transform: translateY(-4px);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }

          .tooltip-arrow {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            border: 6px solid transparent;
            border-left-color: rgba(0, 0, 0, 0.9);
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
            {/* WhatsApp SVG Icon */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382C17.015 14.382 16.565 14.206 16.227 13.896L14.213 12.293C13.718 11.881 13.047 11.881 12.552 12.293C12.214 12.603 11.764 12.779 11.307 12.779C10.85 12.779 10.4 12.603 10.062 12.293L8.048 13.896C7.71 14.206 7.26 14.382 6.803 14.382C5.889 14.382 5.143 13.636 5.143 12.722V6.638C5.143 5.724 5.889 4.978 6.803 4.978H17.472C18.386 4.978 19.132 5.724 19.132 6.638V12.722C19.132 13.636 18.386 14.382 17.472 14.382Z" />
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 21.58C1.97 21.84 2.06 22.13 2.28 22.28C2.39 22.35 2.51 22.38 2.64 22.38C2.74 22.38 2.84 22.36 2.93 22.31L7.87 20.35C9.28 21.13 10.85 21.53 12.04 21.53C17.5 21.53 21.95 17.08 21.95 11.62C21.95 6.16 17.5 1.71 12.04 1.71V2ZM12.04 20.15C10.9 20.15 9.75 19.84 8.73 19.25L8.63 19.19L4.55 20.82L6.2 16.93L6.13 16.83C5.46 15.78 5.11 14.57 5.11 13.32C5.11 8.27 9.18 4.2 14.23 4.2C19.28 4.2 23.35 8.27 23.35 13.32C23.35 18.37 19.28 22.44 14.23 22.44L12.04 20.15Z"/>
            </svg>
          </span>
          
          {/* Tooltip */}
          {!isMobile && (
            <span 
              style={whatsappHover ? tooltipVisibleStyle : tooltipStyle}
            >
              Chat on WhatsApp
              <span className="tooltip-arrow" style={{
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
            {/* Telegram SVG Icon */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27L11.45 15.05C10.18 14.27 10.83 13.76 11.45 13.11L14.16 10.5C14.31 10.35 14.32 10.13 14.15 10.02C13.98 9.91 13.74 9.97 13.6 10.1L10.11 12.7C9.85 12.89 9.54 12.98 9.23 12.98L8.5 12.85C8.12 12.75 7.74 12.59 7.41 12.38C7.08 12.17 6.85 11.92 6.75 11.62C6.65 11.32 6.69 11 6.86 10.72L16.15 8.82C16.39 8.76 16.64 8.8 16.64 8.8Z"/>
            </svg>
          </span>
          
          {/* Tooltip */}
          {!isMobile && (
            <span 
              style={telegramHover ? tooltipVisibleStyle : tooltipStyle}
            >
              Join Telegram
              <span className="tooltip-arrow" style={{
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
