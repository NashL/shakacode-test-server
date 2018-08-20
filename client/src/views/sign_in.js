import React, { Component } from 'react';
export default class SignIn extends Component {
    render () {
        return (
            <div>
                <div id='signinContainer'>
                    <form id='form'>
                        <input className='input' type="email"
                               placeholder="Email"/>
                        <input className='input' type="password"
                               placeholder="Password"/>
                        <button id='submit'>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}