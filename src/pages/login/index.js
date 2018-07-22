import React from 'react'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'


//styled-component 需要innerRef

class Login extends React.PureComponent {

    render() {
        const {login,handleLogin} = this.props
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder={'账号'} innerRef={(input)=>this.account = input}/>
                        <Input placeholder={'密码'} innerRef={(input)=>this.password = input}/>
                        <Button onClick={()=>handleLogin(this.account,this.password)}> 登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to={'/'}/>
        }
    }
}

const mapState = (state)=>({
    login:state.getIn(['login','login'])
})

const mapDispatch = (dispatch)=>({
    handleLogin(account,password){
         dispatch(actionCreators.login(account.value,password.value))
    }
})

export default connect(mapState,mapDispatch)(Login)