import React from 'react'

export default function login(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                    type="text" 
                    name="usernameInput" 
                    placeholder="Username" 
                    value={props.usernameInput} 
                    onChange={props.handleChange}
                />
            <input 
                    type="password" 
                    name="passwordInput" 
                    placeholder="Password" 
                    value={props.passwordInput} 
                    onChange={props.handleChange}
                />
            <button>Login</button>
        </form>
    )
}