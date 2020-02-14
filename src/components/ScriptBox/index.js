import React from 'react'

import './style.css'

function ScripBox(){
    return(
        <div className="content-box">
          <span id="title">Lista de scripts</span>
          <div className="script-box">
            <input placeholder="Pesquisar scripts"></input>
            <table>
              <tr>
                <th>Nome script</th>
                <th>Nome autor</th>
                <th>Deletar</th>
              </tr>
              <tr>
                <td>Nome script</td>
                <td>Nome autor</td>
                <td>X</td>
              </tr>              
              <tr>
                <td>Nome script</td>
                <td>Nome autor</td>
                <td>X</td>
              </tr>
              <tr>
                <td>Nome script</td>
                <td>Nome autor</td>
                <td>X</td>
              </tr>
            </table>
          </div>
        </div>
    )
}

export default ScripBox