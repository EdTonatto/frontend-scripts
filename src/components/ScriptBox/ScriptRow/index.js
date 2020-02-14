import React from 'react'

function ScriptRow({script}){
    return(
        <tr>
            <td>{script.name}</td>
            <td>{script.author}</td>
            <td>X</td>
        </tr>  
    )
}

export default ScriptRow