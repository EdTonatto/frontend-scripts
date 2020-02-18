import React, {useState} from 'react'
import CodeMirror from 'react-codemirror'

import api from '../../services/api'

import './style.css'

function NewScript(){
    require('codemirror/mode/sql/sql')
    const [code, setCode] = useState("")
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")

    const options = {
        lineNumbers: true,
        mode: "text/x-mssql"
    };

    function updateCode(newCode){
        setCode(newCode)
    }    

    async function handleClick(e){
        e.preventDefault();

        const data = {
            name,
            content: code,
            author
        }

        const res = await api.post('/scripts', data)
        alert(JSON.stringify(res))
    }

    return(
        <>
        <span id="title">Cadastro de Scripts</span>
        <div className="code-editor">
            <div className="input-block">
                <input placeholder="Nome do script" onChange={e => setName(e.target.value)}></input>
                <input placeholder="Autor do script" onChange={e => setAuthor(e.target.value)}></input>
            </div>
            <CodeMirror options={options} onChange={updateCode}/>
            <button onClick={handleClick} className="button-register">Salvar script</button>
        </div>
        </>
    )
}

export default NewScript

