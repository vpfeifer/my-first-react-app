import React, { FormEvent, useRef } from 'react';
import "./Form.css"

export default function Form() {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const submit = (event: FormEvent) => {
        event.preventDefault()
        const name = nameRef.current?.value 
        console.log(name)
        if (name === '') {
            alert("Name is required!")
        }
        console.log(emailRef.current?.value)
    }
    
    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameRef}></input>
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email" ref={emailRef}></input>
            </div>
            <button type="submit">Register</button>
        </form>
    )
}