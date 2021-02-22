import styled from "styled-components"
const background = "background4";
export const Container = styled.div`
height:100vh;
width:100vw;
background:url(${process.env.PUBLIC_URL}/assets/images/landing/${background}.jpg);
background-size:cover;
`
export const Img = styled.img`
width:50%;
height:50%;
float:right;
padding:5%;
`
export const Content = styled.div `
float:left;
display: inline-block;
padding: 5%;
color: #fff;
font-family: 'Cairo';
text-transform: capitalize;
width:50%;
&> button{    
    padding: 3% 16%;
    background: #ec4646;
    color: #fff;
    border: 4px solid;
    border-radius: 50px;
    margin: 18% auto;
    font-size: 1.3rem;
    transition:0.5s;
    &:hover{
        background: #FFF;
        color: #ec4646;

    }
}
`