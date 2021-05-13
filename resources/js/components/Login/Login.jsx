import React,{ useState, useEffect } from 'react'
import {
    ButtonForm, FormContain,

    InputForm, LabelForm, LoginPage,
    LoginPopup
} from './Login.element'
import API from '../Service/api'
import { useHistory } from 'react-router';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const handleSingin = ()=>{

        const data = {
            email : email,
            password : password
        }
        API.post('/auth/login',data)
        .then(res=>{
            history.push('/');
            localStorage.setItem('token',res.data.access_token);
        })

    }
    return (
        <LoginPage>
            <LoginPopup>
                <h2 style={{textJustify:'center',fontWeight:'bold',textAlign:'center', marginBottom:20}}>Login</h2>
                <FormContain>
                    <LabelForm>Login</LabelForm>
                    <InputForm onChange = {(e)=>setEmail(e.target.value)}></InputForm>
                </FormContain>
                <FormContain>
                    <LabelForm>password</LabelForm>
                    <InputForm onChange = {(e)=>setPassword(e.target.value)}></InputForm>
                </FormContain>
                <ButtonForm onClick={handleSingin}>SingUp</ButtonForm>
            </LoginPopup>
        </LoginPage>
    )
}

export default Login
