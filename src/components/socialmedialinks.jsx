import React, { useState, useEffect } from 'react';
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa'; // Import icons
import '../styles/socialmedialinks.css';

// Define the CountdownTimer component separately
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date(); // Difference in milliseconds
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <h1 className="join-button">
      {timeLeft.days !== undefined ? (
        <>
          <span>{formatTime(timeLeft.days)}d </span>
          <span>{formatTime(timeLeft.hours)}h </span>
          <span>{formatTime(timeLeft.minutes)}m </span>
          <span>{formatTime(timeLeft.seconds)}s</span>
        </>
      ) : (
        <span>Time's up!</span>
      )}
    </h1>
  );
};

// Main SocialMediaLinks component
function SocialMediaLinks() {
  const socialMedia = [
    {
      name: 'Twitter',
      icon: <FaTwitter size={32} />,
      url: 'https://x.com/TutcoinOfficial',
      glowColor: '#FF8F00',
    },
    {
      name: 'Discord',
      icon: <FaDiscord size={32} />,
      url: 'https://discord.gg/dkCpjGgT',
      glowColor: '#26A69A',
    },
    {
      name: 'Telegram',
      icon: <FaTelegram size={32} />,
      url: 'https://t.me/+QKwGxaXe1jxjOWU8',
      glowColor: '#00E5FF',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={32} />,
      url: 'https://www.instagram.com/tutcoin_official/',
      glowColor: '#E1306C',
    },
  ];

  // Define the target date for the countdown
  const targetDate = new Date('2025-12-31T23:59:59'); // Replace with your target date

  // Format the target date for display
  const formattedTargetDate = targetDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="social-media-section" id="social-media">
      <div className="profile-container">
        <img src="/src/assets/logo.jpg" alt="Profile" className="profile-image" />
      </div>
      <h1 className="join-button">TUTC/SOL</h1>
      {/* Display the target date in an h1 heading */}
      <h1 className="join-button">Target Date: {formattedTargetDate}</h1>
      {/* Use the CountdownTimer component with the targetDate prop */}
      <CountdownTimer targetDate={targetDate} />
      <h2>Follow Us</h2>
      <div className="social-media-cards">
        {socialMedia.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-card"
            style={{ boxShadow: `0 0 15px ${platform.glowColor}` }}
          >
            <div className="icon" style={{ color: platform.glowColor }}>
              {platform.icon}
            </div>
            <p>{platform.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaLinks;