import styled from 'styled-components'
export const BoxU = styled.div`
height:auto;
position:relative;
`
export const Avatar = styled.img`
    border-radius:50%;
    height: 50px;
    width:50px;
`
export const Popup = styled.div`
    position: absolute;
    top: 60px;
    width:120px;
    left: calc(50% - 60px);
    display: ${(show)=>(show ? 'flex' : 'none')};
    flex-direction:column;
    align-items:center;
    background-color:#fff;
    border-radius:3px;
    box-shadow: 0 8px 8px rgba(0,0,0,0.1);
`
export const ItemPop = styled.h6`
    padding: 10px;
    cursor: pointer;
    color:#000;
    width:100%;
    margin:0;
`
