import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import api from '../../../services/api'

import './style.css'

function ScriptRow({script}){
    async function handleDeleteClick(e){
        e.preventDefault();
        alert(script._id)

        const res = await api.delete(`/scripts/${script._id}`)
        
        alert(res.data.message)
    }

    return(
        <tr>
            <td>{script.name}</td>
            <td>{script.author}</td>
            <td className="option">
                <button onClick={handleDeleteClick}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>  
    )
}

export default ScriptRow