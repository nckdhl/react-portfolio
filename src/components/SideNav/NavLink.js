import React from 'react';

function NavLink (props) {
  
  const { linkTitle, showPage, toggleNavbar } = props;

  const toggleView = () => {
    toggleNavbar();
    showPage.bind(this, linkTitle);
  }

  return (<li onClick={toggleView}>
            {linkTitle}
          </li>);

}

export default NavLink;