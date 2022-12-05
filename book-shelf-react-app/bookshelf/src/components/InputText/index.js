import { useState } from 'react'
import './InputText.css'
//import { useState } from 'react'

const InputText = (props) => {

    const placeholderModificada = `${props.placeholder}...`



    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="input-text">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required = {props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText