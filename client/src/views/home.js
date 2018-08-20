import React, { Component } from 'react';

export default class Home extends Component {
    render () {
        return (
            <div id='container'>
                Hello!<br/>
                <a href="sign_in">Sign In</a><br/>
                <a href="sign_up" >Sign Up</a><br/>
            </div>
        )
    }
}