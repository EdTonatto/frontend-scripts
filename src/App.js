import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import api from './services/api'

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'

import Menu from './components/Menu'
import ScriptBox from './components/ScriptBox'
import NewScript from './components/NewScript';

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
      <Router>
        <aside>
          <Link to="/" class="title"><strong>API-Scripts</strong></Link>
          <Menu  />
        </aside>
        <main>
          <Switch>
            <Route path='/scripts'>
              <ScriptBox />
            </Route>
            <Route path='/new'>
              <NewScript />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
