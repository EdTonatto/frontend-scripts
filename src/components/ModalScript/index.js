import React from 'react'

import './style.css'

function ModalScript({show, handleModal}){
    const showHideClassname = show ? "modal display-block" : "modal display-none";

    return(
        <div className={showHideClassname}>
            <section className="modal-main">
            <h1>Modal</h1>
            <h2>Teste</h2>
            <button onClick={handleModal}>close</button>
            </section>
        </div>
    )
}

export default ModalScript