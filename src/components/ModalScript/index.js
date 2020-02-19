import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css'

function ModalScript({show, handleModal, script}){
    const showHideClassname = show ? "modal display-block" : "modal display-none";

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
                    <input type="text" value={script.content} readonly></input>
                </div>
                <button className="close-button" onClick={handleModal}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </section>
        </div>
    )
}

export default ModalScript