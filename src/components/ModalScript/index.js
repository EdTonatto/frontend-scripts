import React from 'react'
import CodeMirror from 'react-codemirror'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css'

function ModalScript({show, isEdit, handleModal, script}){
    require('codemirror/mode/sql/sql')
    const showHideClassname = show ? "modal display-block" : "modal display-none";
    const showHideEditButtonClassname = isEdit ? "button-register display-block" : "button-register display-none";

    const options = {
        lineNumbers: true,
        value: script.content,
        mode: "text/x-mssql",
        readOnly: true,
    };

    function closeModal(){
        handleModal(false)
    }

    return(
        <div className={showHideClassname}>
            <section className="modal-main">
                <div className="name-author">
                    <div className="name">
                        <label>Nome Script</label>
                        <input type="text" value={script.name} readonly></input>
                    </div>
                    <div className="author">
                        <label>Autor Script</label>
                        <input type="text" value={script.author} readonly></input>
                    </div>
                </div>
                <div className="content">
                    <label>Conteudo Script</label>
                    <CodeMirror options={options}/>
                    <button className={showHideEditButtonClassname}>Salvar script</button>
                </div>
                <button className="close-button" onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </section>
        </div>
    )
}

export default ModalScript