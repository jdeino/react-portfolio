import { NavLink } from 'react-router-dom';
import './navigation.css';
import { useState } from 'react'; 
function Navigation() {
  const [activeLink, setActiveLink] = useState('About Me'); // Initialize state

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className={`nav-item ${activeLink === 'About Me' ? 'active' : ''}`}>
          <NavLink
            to="/"
            onClick={() => handleLinkClick('About Me')}
            exact
          >
            About Me
          </NavLink>
        </li>
        <li className={`nav-item ${activeLink === 'Portfolio' ? 'active' : ''}`}>
          <NavLink
            to="/portfolio"
            onClick={() => handleLinkClick('Portfolio')}
          >
            Portfolio
          </NavLink>
        </li>
        <li className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>
          <NavLink
            to="/contact"
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </NavLink>
        </li>
        <li className={`nav-item ${activeLink === 'Resume' ? 'active' : ''}`}>
          <NavLink
            to="/resume"
            onClick={() => handleLinkClick('Resume')}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
