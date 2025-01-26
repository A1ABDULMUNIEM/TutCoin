import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa'; // Import icons
import '../styles/socialmedialinks.css';

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

  return (
    //the cards & the glowcolor effect
    <div className="social-media-section" id="social-media">
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
      
      <button className="join-button">Join TutArmy</button>
    </div>
  );
}

export default SocialMediaLinks;