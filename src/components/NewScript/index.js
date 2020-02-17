import React, {useState} from 'react'
import CodeMirror from 'react-codemirror'

import './style.css'

function NewScript(){
    require('codemirror/mode/sql/sql')
    const [code, setCode] = useState("")

    const options = {
        lineNumbers: true,
        mode: "text/x-mssql"
    };

    function updateCode(newCode){
        setCode(newCode)
    }

    return(
        <>
        <span id="title">Cadastro de Scripts</span>
        <div className="code-editor">
            <div className="input-block">
                <input placeholder="Nome do script"></input>
                <input placeholder="Autor do script"></input>
            </div>
            <CodeMirror options={options} onChange={updateCode}/>
        </div>
        </>
    )
}

export default NewScript

