import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = (value)=>({
    type:actionTypes.CHANGE_LOGIN,
    value
})

export const login = (account,password)=> {
    return (dispatch) => {
       axios.get('/api/login.json?account='+account+'&password='+password).then(res=>{
           const result = res.data.data
           if(result){
               dispatch(changeLogin(true))
           } else {
               dispatch(changeLogin(false))
           }
       })
    }
}

export const logout = ()=>({
   type:actionTypes.LOGOUT,
    value:false
})