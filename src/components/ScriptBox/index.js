import React, {useState, useEffect} from 'react'

import './style.css'
import api from '../../services/api'
import ScriptRow from '../ScriptRow'
import ModalScript from '../ModalScript'

function ScriptBox(){
    const [scripts, setScripts] = useState([])
    const [modalScript, setModalScript] = useState([])
    const [modalState, setModalState] = useState(false)

    function handleModalState(){
      setModalState(modalState ? false : true)
    }

    function handleSelectModalScript(data){
      setModalScript(data)
    }

    async function loadScripts(){
      const res = await api.get('/scripts')
        
      setScripts(res.data)
    }

    useEffect(() => {
      loadScripts()
    },[]) 

    return(
        <div className="content-box">
          <ModalScript script={modalScript} show={modalState} handleModal={handleModalState}/>
          <span id="title">Lista de scripts</span>
          <div className="script-box">
            <input placeholder="Pesquisar scripts"></input>
            <table>
              <tr>
                <th>Nome script</th>
                <th>Nome autor</th>
                <th>Visualizar</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>    
              {scripts.map(script =>(
                  <ScriptRow 
                    handleModal={handleModalState} 
                    handleSelectScript={handleSelectModalScript}
                    updateList={loadScripts} 
                    script={script}/>
              ))}        
            </table>
          </div>
        </div>
    )
}

export default ScriptBox
