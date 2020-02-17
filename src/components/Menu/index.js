import React from 'react';
import {Link} from "react-router-dom";

import './style.css';

function Menu(){
    return(
        <nav className="menu">
          <Link to="/scripts" className="menu-option">Listar Scripts</Link>
          <Link to="/new" className="menu-option">Cadastrar Scripts</Link>
        </nav>
    );
}

export default Menu;