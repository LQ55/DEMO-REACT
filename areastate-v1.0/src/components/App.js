import React, { Component } from 'react';
import logo from '../assite/logo.svg';
import '../stylesheet/App.css';
import 'antd/dist/antd.css'
import LoginForm from '../components/login/loginForm'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">系统登陆</h1>
                </header>
                <LoginForm/>
            </div>
        );
    }
}

export default App;
