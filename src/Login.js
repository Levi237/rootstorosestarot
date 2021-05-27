import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import styled from 'styled-components';

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
        fireErrors:"",
        formTitle: "Sign In",
        loginBtn: true,
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    login = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({fireErrors: error.message})
            });
        this.props.clearModal();
    };
    register = e => {
        if (this.state.password === this.state.passwordConfirm ) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .catch((error) => {
                    this.setState({fireErrors: error.message});
                });
        } else {
            alert('passwords dont match');
        };
    };

    getAction = action => {
            if(action === "reg"){
                this.setState({formTitle: "Create Account", loginBtn: false, fireErrors: ""})
            }else{
                this.setState({formTitle: "Sign In", loginBtn: true, fireErrors: ""})
            }
    };

    render(){
        const { fireErrors, loginBtn, formTitle, email, password, passwordConfirm } = this.state
        // const { uid } = this.props

        let errorNotification = fireErrors ? 
            <div className="Error">{fireErrors}</div> : null;
        let submitBtn = loginBtn ? 
            <button className="loginBtn purpleBtn" type="submit" onClick={this.login}>Enter</button> : 
            <button className="loginBtn purpleBtn" type="submit" onClick={this.register}>Sign Up</button>;
        let login_register = loginBtn ? 
            <p className="registerBtn" onClick={() => this.getAction('reg')}>New? <u>Create an account</u></p> : 
            <p className="registerBtn" onClick={() => this.getAction('login')}>Already have an account? <u>Login</u></p>;

        return(

            <LoginWrapper>
                <div>
                    <p className="errorNotification">{errorNotification}</p>
                    <h1 id="title">{formTitle}</h1>
                            {login_register}
                            <br/>
                        <div className="body">
                            <form>
                                <input type="email" value={email} onChange={this.handleChange} name="email" placeholder="email"/>
                                <input type="password" value={password} onChange={this.handleChange} name="password" placeholder="password"  />
                                {!loginBtn &&  <input type="password" value={passwordConfirm} onChange={this.handleChange} name="passwordConfirm" placeholder="confirm password"  />}
                                {submitBtn}
                            </form>
                        </div>
                </div>
            </LoginWrapper>
        );
    };
};

const LoginWrapper = styled.div`
    text-align: center;
    h1 {
        margin: 10px 0 10px 0;
        color: var(--purple);
        font-family: var(--decorative-font);
    }
    p {
        color: var(--lightgrey);
    }
    input,
    button {
        font-size: 18px;
        padding: 4px
    }
    input {
        display: block;
        margin: 0 auto 10px;
        width: calc(100% - 12px);
        max-width: calc(200px - 12px);
    }
    button {
        width: 100%;
        max-width: 200px;
    }
    .registerBtn {
        &:hover{
            cursor: pointer;
            color: var(--green);
        }
    }
`;