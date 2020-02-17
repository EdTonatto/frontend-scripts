import React, {useState, useEffect} from 'react'
import api from './services/api'

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'

import Menu from './components/Menu'
import ScriptBox from './components/ScriptBox'
import ScriptRow from './components/ScriptBox/ScriptRow'

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
        <ScriptBox />
      </main>
    </div>
  );
}

export default App;
