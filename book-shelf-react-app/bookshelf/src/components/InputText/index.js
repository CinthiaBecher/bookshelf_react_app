import './InputText.css'
import { useState } from 'react'

const InputText = (props) => {

    const onTyping = (evento) => {
        props.onChanges(evento.target.value)
    } 

    return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.newValue} onChange={onTyping} required = {props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText