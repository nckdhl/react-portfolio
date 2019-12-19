import React from 'react';
import './MenuButton.css';

function MenuButton({ collapsed }) {
    return (
      <span className={`json-burger ${(collapsed ? 'collapsed' : 'expanded' )}`}>
          {'[{}]'}
      </span>
    );
}

export default MenuButton;