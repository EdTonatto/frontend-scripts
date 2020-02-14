import React from 'react';

import './style.css';

function Menu(){
    return(
        <nav className="menu">
        <a href="#" className="menu-option">
          <span>Listar Scripts</span>
        </a>
        <a href="#" className="menu-option">
          <span>Cadastrar Scripts</span>
        </a>
      </nav>
    );
}

export default Menu;