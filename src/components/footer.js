import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-contact-info">
            Email: <a href="mailto:youremail@example.com">josh.deino91@yahoo.com</a> | Phone: (123) 456-7890
          </p>
        </div>
        <p className="footer-text">Copyright © {new Date().getFullYear()} Josh Deino</p>
      </div>
    </footer>
  );
}

export default Footer;
