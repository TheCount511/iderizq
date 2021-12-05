import styled from "styled-components/macro";

export const Wrapper = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#EAEAEA;`    

export const CarouselContainer = styled.div`
position: relative;
width: 100%;
overflow: hidden;
`

export const Slide = styled.div`
display: flex;
  width: 100%;
  height: 450px;
  transition: transform 0.6s ease-in-out;
transform: ${({xPosition})=>`translateX(${xPosition}px)`}; 

//(*)
img{
    width: 100%;
    
};
`

export const Button = styled.img`
position: absolute;
top: 50%;
z-index:10;
cursor: pointer;
font-size: 15px;
left: ${({side})=>side==='prev'&&5}px;
right:${({side})=>side==='next'&&5}px;
`