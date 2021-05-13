import styled from "styled-components";

export const InfoSec = styled.div`
    padding: 160px 0 0 0;
    color: #fff;
    background: ${({redB})=>(redB ? 'red' : '#fff')};
`;
export const RowInfo = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({ImgStart})=>(ImgStart ? 'row-reverse' : 'row')};
`;
export const ColumnInfo = styled.div`
    padding-left:15px;
    padding-right: 15px;
    margin-bottom:30px;
    flex:1;
    max-width:50%;
    flex-basis:50%;

@media screen and (max-width:768px){
    max-width:100%;
    flex-basis:100%;
    display:flex;
    justify-content:center;
}
`;
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
@media screen and (max-width:768px){
    padding-bottom:65px;
}
`;
export const Topline = styled.div`
    color: rgba(0,0,0,0.7);
    font-size:18px;
    line-height:16px;
    letter-spacing:1.4px;
    margin-bottom:16px;
`;
export const Headline = styled.h1`
    color: rgba(0,0,0,0.7);
    font-size:48px;
    line-height:1.1;
    margin-bottom:24px;
`;
export const Descript = styled.p`
    color: rgba(0,0,0,0.7);
    font-size:18px;
    line-height:24px;
    margin-bottom:35px;
    max-width:440px;
`;
export const ImgWrapper = styled.div`
    max-width:555px;
    display:flex;
    justify-content: ${({start})=>(start ? 'flex-start' : 'flex-end')};
`;
export const Img = styled.img`
    max-width:100%;  
    display:inline-block;
    vertical-align:middle;
    max-height:500px;
    border:0;
    padding-right:0;
    justify-content: ${({start})=>(start ? 'flex-start' : 'flex-end')};
`;