import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css'

function ModalScript({show, handleModal}){
    const showHideClassname = show ? "modal display-block" : "modal display-none";

    return(
        <div className={showHideClassname}>
            <section className="modal-main">
                <h1>Modal</h1>
                <h2>Teste</h2>
                <button className="close-button" onClick={handleModal}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </section>
        </div>
    )
}

export default ModalScript