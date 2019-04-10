import * as React from 'react';

interface HeaderProps {
  title: string;
  logo?: string;
  links?: Array<{ text: string; url: string }>;
}

const Header: React.SFC<HeaderProps> = ({ title, logo, links = [] }) => (
  <header className="header-section">
    <a href="/" className="site-logo"><img src={logo} alt={title} height={32} /></a>
    <div className="nav-switch">
      <i className="fa fa-bars"></i>
    </div>
    <div className="nav-warp">
      <ul className="main-menu">
        {links.map(link => <li key={link.url}><a href={link.url}>{link.text}</a></li>)}
      </ul>
    </div>
  </header>
);

export default Header;
