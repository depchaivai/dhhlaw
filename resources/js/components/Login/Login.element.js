import styled from 'styled-components'

export const LoginPage = styled.div`
    background-image: linear-gradient(to top right, #2BF1FF, #1BACE6, #652CFE);
    display:flex;
    justify-content: center;
    height:100vh;
    align-items:center;
`
export const LoginPopup = styled.div`
    width:350px;
    height:450px;
    border-radius:6px;
    padding: 30px 50px;
    background-color:#fff;
    box-shadow: 0 10px 10px 2px rgba(0,0,0,0.1);
`
export const FormContain = styled.div`
    padding: 24px 0;
`
export const LabelForm = styled.label`
    font-weight:bold;
`
export const InputForm = styled.input`
    width:100%;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    outline: none;
`
export const ButtonForm = styled.button`
    width:100%;
    padding: 8px;
    border: none;
    margin-top:20px;
    border-radius:20px;
    color: #fff;
    background-image: linear-gradient(to top right, #2BF1FF, #1BACE6, #652CFE);
`
