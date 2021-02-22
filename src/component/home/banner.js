import React from 'react';
import {Container,Img,Content} from "./bannerStyle";
function Banner(){
  return(
    <>
    <Container>
      <Content>
        <h1>shopping online  </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, earum. </p>
      <button>consectetur via </button>
   </Content>
      <Img src={`${process.env.PUBLIC_URL}/assets/images/landing/shopping2.svg`} />
    </Container>
    </>
  )
}
export default Banner;