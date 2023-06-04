import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb,Avatar} from 'antd';
import $ from "jquery";
 
const { Header, Footer,Content } = Layout;
 
class Register extends Component {
 
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            confirmpwd:''
        }
    }
    handleInput(){
        let username=$("#username").val();
        let password=$("#password").val();
        let confirmpwd=$("#confirmpwd").val();
        this.setState({
            username:username,
            password:password,
            confirmpwd:confirmpwd,
        })
    }
 
    handleRegister(){
        let {username,password,confirmpwd}=this.state
        console.log(username,password,confirmpwd)
        $.ajax({
            url:"/user/register",
            dataType:"json",
            type:"POST",
            data:{
                username:username,
                password:password,
                confirmpwd:confirmpwd
            },
            success:function (result){
                if(result.code==="202"){
                    alert(result.msg);
                    window.location.href='/';
                }
                else {
                    alert(result.msg);
                }
            }
        })
    }
 
    handleCancel(){
        window.location.href='/register';
    }
 
    render() {
        return (
            <Layout className="layout">
                
                <Content style={{ padding: '0 '}}>
                    <Breadcrumb style={{ margin: ' 0' }}>
                    </Breadcrumb>
                    <div style={{ background: 'black', padding: 24, minHeight: 280 }}>
                        <h4 style={{color:'white',textAlign:'center'}}>Register</h4>
                        <br/>
                        <div align="center">
                            Username:&nbsp;&nbsp;<input  id="username" type="text"
                                      defaultValue={this.state.username} onChange={this.handleInput.bind(this)}/>
                            <br/>
                            <br/>
                            Password:&nbsp;&nbsp;&nbsp;&nbsp;<input id="password" type="password" defaultValue={this.state.password} onChange={this.handleInput.bind(this)}/>
                            <br/>
                            <br/>
                            Confirm: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input  id="confirmpwd" type="password" defaultValue={this.state.confirmpwd} onChange={this.handleInput.bind(this)}/>
                            <br/>
                            <br/>
                            <br/>
                            <button onClick={this.handleRegister.bind(this)}>Rigitser</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={this.handleCancel.bind(this)}>Cancel</button>
                        </div>
                    </div>
                </Content>
                
            </Layout>
        );
    }
}
 
export default Register;