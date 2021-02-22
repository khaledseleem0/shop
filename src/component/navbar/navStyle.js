import styled from 'styled-components';
const maxWidth = 700;
export  const  Header = styled.div`
        padding:1% 5% ;
        display: flex;
        background: #fff;
        box-shadow:0 19px 38px rgba(0,0,0,0.023),0 15px 12px rgba(0,0,0,0.03322);
        position: sticky;
        right: 0px;
        left: 0px;
        top: 0px;
        z-index:12;
`
export const Navbar =styled.div`
        flex:1;
        display: flex;
        align-items: center;
        z-index: 2;
        @media screen and (max-width:${maxWidth}px){
            position: absolute;
            right: 0px;
            top: 0px;
            bottom: 0px;
            height: 100vh;
            clip-path: circle(0%);
            transition:0.5s;
        }
` 
export const Logo = styled.div`
        
`
export const Ul = styled.ul`
        display:flex;
        justify-content: space-around;
        list-style:none;
        flex:1;
        @media screen and (max-width:${maxWidth}px){
            flex-flow: column;
            height:100vh;
            justify-content: space-around;
            width:100vw;
            background:#fff;
            align-items: center;
            transition:5s;
        }

 `

 export const Li = styled.li`
 position:relative;
 z-index:0;

 &:after{
    content: "";
    background: #FFBF00;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-radius: 20px;
    transform:scale(1.3);
    transition:0.4s;
    z-index:-1;
    clip-path:circle(0%);

 } &:hover:after{
    clip-path:circle(100%);
 }     
 & > a{
            text-decoration:none;
            color:#333;
            font-family:Cairo ;
            text-transform: capitalize;

        }
 `
export const Burger = styled.div`
padding: 5px;
width: 50px;
display: none;
height: 40px;
position:absolute;
right:5%;
top:25%;
transition:0.5s;
z-index:3;
        @media screen and (max-width:${maxWidth}px){
            display: inline-block;
        }
        & > span{
            background:rgb(45, 45, 45);
            width: 100%;
            display: block;
            height: 5px;
            margin: 4px auto;
            transition:0.5s;

        }
` 
export const IconNav = styled.i`
margin:5px;
`
export const Amount = styled.span`
padding: 5px;
background: #FFBF00;
border-radius: 7px;
position: absolute;
line-height: 9px;
color: #fff;
`