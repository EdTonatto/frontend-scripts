import React, {useState, useEffect} from 'react'
import api from './services/api'

import './App.css'
import './global.css'
import './Sidebar.css'

function App() {
  const [connection, setConnection] = useState()

  useEffect(() =>{
    async function loadConnection(){
      const res = await api.get('/');
      
      setConnection(res.data);
    }

    loadConnection();
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>API-Scripts</strong>
        <nav className="menu">
          <a href="#" className="menu-option">
            <span>Listar Scripts</span>
          </a>
          <a href="#" className="menu-option">
            <span>Cadastrar Scripts</span>
          </a>
        </nav>
      </aside>
    </div>
  );
}

export default App;
