import React from 'react'
import CodeMirror from 'react-codemirror'

import './style.css'

function NewScript(){
    require('codemirror/mode/sql/sql')
    const options = {
        lineNumbers: true,
        mode: "text/x-mssql"
    };

    return(
        <>
        <span id="title">Cadastro de Scripts</span>
        <div className="code-editor">
            <CodeMirror options={options}/>
        </div>
        </>
    )
}

export default NewScript

