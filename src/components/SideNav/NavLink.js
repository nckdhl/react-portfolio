import React from 'react';

function NavLink (props) {
  
  const { linkTitle, showPage } = props;

  return (<li onClick={showPage.bind(this, linkTitle)}>
            {linkTitle}
          </li>);

}

export default NavLink;