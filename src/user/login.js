import React, { Component } from 'react';
import TopBar from '../common/TopBar';
import '../common/common.css';
import BottomBar from '../common/BottomBar';
import './Login.css'

class Login extends Component {
    render() {
        return <div style={{ height: "100%" }}>
            <TopBar />
            <div className="LoginPage">
                <div className="LoginForm">
                    <form>
                        <div>
                            <text>登录</text><text style={{ "marginLeft": 40 }}>立即注册</text>
                        </div>
                        <div>
                            <input id='input_credential' type='text' placeholder="用户名/手机" />
                        </div>
                        <div>
                            <input id='input_passowrd' type='password' placeholder="密码" />
                        </div>
                        <div><button id='btn_login'>登录</button></div>
                    </form>
                </div>
            </div>
            <BottomBar />
        </div>;
    }
}

export default Login;