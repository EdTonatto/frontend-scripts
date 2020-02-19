import React, {useState} from 'react'
import CodeMirror from 'react-codemirror'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api'
import './style.css'

function ModalScript({show, isEdit, handleModal, script, updateList}){
    require('codemirror/mode/sql/sql')
    const [code, setCode] = useState("")
    const [name, setName] = useState("")
    const showHideClassname = show ? "modal display-block" : "modal display-none";
    const showHideEditButtonClassname = isEdit ? "button-register display-block" : "button-register display-none";

    const options = {
        lineNumbers: true,
        value: script.content,
        mode: "text/x-mssql",
        readOnly: isEdit ? false : true,
    };

    function closeModal(){
        handleModal(false)
    }

    function updateCode(newCode){
        setCode(newCode)
    }   

    async function handleClick(e){
        e.preventDefault();

        const data = {
            name: name || script.name,
            content: code || script.content,
            author: script.author
        }

        const res = await api.post(`/scripts/${script._id}`, data)
        updateList()
        closeModal(false)
    }

    return(
        <div className={showHideClassname}>
            <section className="modal-main">
                <div className="name-author">
                    <div className="name">
                        <label>Nome Script</label>
                        <input 
                            type="text" 
                            defaultValue={script.name} 
                            readOnly={isEdit ? false : true}
                            onChange={e => setName(e.target.value)}>
                        </input>
                    </div>
                    <div className="author">
                        <label>Autor Script</label>
                        <input type="text" value={script.author} readonly></input>
                    </div>
                </div>
                <div className="content">
                    <label>Conteudo Script</label>
                    <CodeMirror options={options} onChange={updateCode}/>
                    <button className={showHideEditButtonClassname} onClick={handleClick}>Salvar script</button>
                </div>
                <button className="close-button" onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </section>
        </div>
    )
}

export default ModalScript