import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEye, faEdit } from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api'

import './style.css'

function ScriptRow({script, updateList, handleModal, handleSelectScript}){
    async function handleDeleteClick(e){
        e.preventDefault();

        const res = await api.delete(`/scripts/${script._id}`)
        alert(res.data.message)
        updateList()
    }

    function setSelectedScript(){
        const data = {
            _id: script._id,
            name: script.name,
            content: script.content,
            author: script.author
        }
        handleSelectScript(data)
    }

    function openViewMode(e){
        e.preventDefault()

        setSelectedScript()
        handleModal(false)
    }

    function openEditMode(e){
        e.preventDefault()

        setSelectedScript()
        handleModal(true)
    }

    return(
        <tr>
            <td>{script.name}</td>
            <td>{script.author}</td>
            <td className="option">
                <button onClick={openViewMode}>
                    <FontAwesomeIcon icon={faEye} />
                </button>
            </td>              
            <td className="option">
                <button onClick={openEditMode}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </td>            
            <td className="option">
                <button onClick={handleDeleteClick}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>  
    )
}

export default ScriptRow