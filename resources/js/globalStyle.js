import styled,{ createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Source San Pro', sans-serif;

}

`
export const Container = styled.div`
z-index:1;
width:100%;
max-width: 1300px;
margin-left: auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;

@media screen and (max-width:991px){
padding-left:30px;
padding-right:30px;
}
`;
export const Button = styled.button`
    border-radius:4px;
    border:none;
    color:#000;
    white-space:nowrap;
    outline:none;
    cursor: pointer;
    background: ${({primary})=>(primary ? '#fff' : '#474747')};
    font-size: ${({fontBig})=>(fontBig ? '20px':'16px')};
    padding: ${({paddingBig})=>(paddingBig ? '12px 64px' : '10px 20px')};
    &:hover{
        transition: all 0.3s ease-out;
        background: darkred;
        color:#ff7b00;
        background:${({primary})=>(primary ? '#474747' : '#FFFB2B')};
    }
@media screen and (max-width:960px){
    width:100%;
}
`;

export default GlobalStyle;
