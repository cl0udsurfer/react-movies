import React, { useState } from 'react';

import './Header.scss';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 3,
    iconClass: 'fas fa-start',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = () => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <h3>Logo</h3>
          </div>
          <div className={`header-menu-toggle ${menuClass ? 'is-active' : ''}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`header-nav ${navClass ? 'header-mobile-nav' : ''}`}>
            {HEADER_LIST.map((item) => {
              return (
                <li key={item.id} className="header-nav-item">
                  <span className="header-list-name">
                    <i className={item.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{item.name}</span>
                </li>
              );
            })}
            <input className="search-input" type="text" placeholder="Search movie" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
