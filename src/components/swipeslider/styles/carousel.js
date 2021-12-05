import styled from "styled-components/macro";

export const CarouselWrapper = styled.div`
overflow: hidden;
height: 100%;
text-align: center;
`;

export const CarouselContainer = styled.div`
white-space:nowrap;
transition:transform 0.3s;
height:100%;
align-items:center;`

export const CarouselItemContainer = styled.div`
display:inline-flex;
align-items:center;
justify-content:center;
height:100vh;
background-color:green;
color:#fff;`

export const Button = styled.img`
position: absolute;
top: 50%;
z-index:10;
cursor: pointer;
font-size: 15px;
left: ${({side})=>side==='prev'&&5}px;
right:${({side})=>side==='next'&&5}px;`

export const Indicator = styled.span`
width: 15px;
height: 15px;
line-height: 15px;
padding: 1px 4px;
border-radius: 50%;
color: #FFF;
font-size: 9px;
background-color: #e1c2a6;
text-align: center;

`

export const IndicatorContainer = styled.div`

    text-align: center;
    width: 140px;
    position: relative;    
    bottom: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

`