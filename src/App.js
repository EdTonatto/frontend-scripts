import React, {useState, useEffect} from 'react'
import api from './services/api'

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'

import Menu from './components/Menu'

function App() {
  const [connection, setConnection] = useState()

  useEffect(() =>{
    async function loadConnection(){
      const res = await api.get('/');
      
      setConnection(res.data.message);
    }

    loadConnection();
    if(!connection)
      setConnection("Failed to connect to API-Scripts")
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>API-Scripts</strong>
        <Menu  />
      </aside>
      <main>
        <div className="content-box">
          <span id="title">Lista de scripts</span>
          <div className="script-box">
            <input placeholder="Pesquisar scripts"></input>
            <div className="script">
              <span>Nome script</span>
              <span>Nome autor</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
