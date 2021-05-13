import styled from "styled-components"

export const CommentBox = styled.div`
    display:flex;
    flex-direction:column;
`

export const FormContain = styled.div`
    padding: 10px 0;
`
export const LabelForm = styled.label`
font-weight:bold;
`
export const InputForm = styled.input`
width:100%;
border: 1px solid rgba(0,0,0,0.5);
`
export const CommentArea = styled.textarea`
width:100%;
height:150px;
border: 1px solid rgba(0,0,0,0.5);
`
export const FormButton = styled.button`
    width: 200px;
    background-color: blue;
    color:#FFF;
    padding: 10px;
`
export const RowComment = styled.div`
    display: flex;
    flex-direction:column;
    padding: 10px 30px;
    margin-top:10px;
`
export const Commenter = styled.h6`
    color:black;
    font-weight:bold;
`
export const CommentContent = styled.p`
    font-size:14px;
    margin:0;
`
export const Commentime = styled.p`
    font-size:11px;
    color: rgba(0,0,0,0.4);
`
export const Cmtspan = styled.span`
    font-size: 12px;
    cursor: pointer;
    margin-right:10px;
    color: rgba(2,187,255,0.5);
`

