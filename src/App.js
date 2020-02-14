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
        <div className="menu">
          <div className="menu-option" onclick="#">
            <span>Listar Scripts</span>
          </div>
          <div className="menu-option" onclick="#">
            <span>Cadastrar Scripts</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
