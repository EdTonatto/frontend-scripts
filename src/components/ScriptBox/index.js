import React, {useState, useEffect} from 'react'

import './style.css'
import api from '../../services/api'
import ScriptRow from './ScriptRow'


function ScriptBox(){
  const [scripts, setScripts] = useState([])
      useEffect(() => {
        async function loadScripts(){
          const res = await api.get('/scripts')
            
          setScripts(res.data)
        }
    
        loadScripts()
      },[]) 

    return(
        <div className="content-box">
          <span id="title">Lista de scripts</span>
          <div className="script-box">
            <input placeholder="Pesquisar scripts"></input>
            <table>
              <tr>
                <th>Nome script</th>
                <th>Nome autor</th>
                <th>Deletar</th>
              </tr>    
              {scripts.map(script =>(
                  <ScriptRow script={script}/>
              ))}        
            </table>
          </div>
        </div>
    )
}

export default ScriptBox