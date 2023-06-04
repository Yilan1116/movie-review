import React, {Component} from 'react';
import $ from 'jquery';
import { Layout, Breadcrumb} from "antd";
import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {Link, useNavigate} from "react-router-dom"

const { Content} = Layout;
class Login extends Component {
    constructor(props) {
        super(props);
        //构造函数初始化，要将改变的数据初始化state中
        this.state={
            username:'',
            password:''
        }
    }
    handleInput(){
        let username=$("#username").val();
        let password=$("#password").val();
        this.setState({
            username:username,
            password:password
        })
    }
    handleLogin (){
        let {username,password}=this.state
        console.log(username,password)
        //localStorage.setItem("user_key",result.data.username);
        
        window.location.href=`/?username=${username}&password=${password}`;
        
        // $.ajax({
        //     url:"/login",
        //     dataType:"json",
        //     type:"POST",
        //     data:{
        //         username:username,
        //         password:password
        //     },
        //     success:function (result){
        //         if(result.code==="404"){
        //             alert(result.msg);
        //             localStorage.setItem("user_key",result.data.username);
        //             window.location.href='/';
        //         }
        //         else {
        //             alert(result.msg);
        //         }
                
        //     }
        // })
        // try {
        //     await axios.post(`/login?username=${username}&password=${username}`);
        //     navigate("/");
        //   } catch (err) {
        //     console.log(err);
        //   }
    }
 
    handleOut(){
        localStorage.removeItem("user_key");
        window.location.href='/';
    }
 
    render() {
        return(
            <Layout className="layout">
                
                <Content style={{ padding: '0 '}}>
                    <Breadcrumb style={{ margin: ' 0' }}>
                    </Breadcrumb>
                    <div style={{ background: 'black', padding: 24, minHeight: 280 }} >
                        <h4 style={{textAlign: 'center', color: 'white'}}>Login</h4>
                        <br></br>
                        <div align="center">
                            <div align="center">
                                Username: <input  id="username" type="text"
                                          defaultValue={this.state.username} onChange={this.handleInput.bind(this)}/>
                                <br/>
                                <br/>
                                Password: <input  id="password" type="password" defaultValue={this.state.password} onChange={this.handleInput.bind(this)}/>
                                <br/>
                                <br/>
                                <br/>
                                <button onClick={this.handleLogin.bind(this)}>
                                    Login</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={this.handleOut.bind(this)}>Sign out</button>
                            </div>
                        </div>
                    </div>
                </Content>
                
            </Layout>
        );
    }
}
 
export default Login;