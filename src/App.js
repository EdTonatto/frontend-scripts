import React, {useState, useEffect} from 'react'
import './App.css'
import api from './services/api'

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
    <h1>{JSON.stringify(connection)}</h1>
  );
}

export default App;
