import { useState } from 'react';
import '../styles/heroSection.css';

function HeroSection() {
  const [isCopied, setIsCopied] = useState(false); // State to track if text is copied

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    const textToCopy = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tenetur error labore aliquid distinctio officia quis modi";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true); // Show the "Copied" message
        setTimeout(() => setIsCopied(false), 2000); // Hide the message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="hero-section">
      {/* First Div: Hero Content */}
      <div className="hero-content">
        {/* Title */}
        <h1 className="hero-title">Unlock the Pharaoh’s Wealth on the Blockchain👑</h1>
        
        {/* Tagline */}
        <p className="hero-tagline">TutCoin: Where Ancient Glory Meets Future Wealth</p>
      </div>

      {/* Second Div: Hero Contract */}
      <div className="hero-contract">
        
        {/* Button */}
        <button className="buy-now-button" onClick={copyToClipboard}>
          {isCopied ? "Copied!" : "Buy $TUT Now"}
        </button>

        {/* Message */}
        {isCopied && <p className="copy-message">Token address copied to clipboard!</p>}
      </div>
    </div>
  );
}

export default HeroSection;