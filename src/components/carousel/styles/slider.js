import styled from "styled-components/macro";

export const SliderWrapper = styled.div`
display:inline-flex;
align-items:center;
justify-content:center;
height:100vh;
background:url(${({ src }) => src}) top left / cover no-repeat;
background-position:center center;
background-color:green;
color:#fff;`

export const ProductSummary = styled.p``;

export const ProductPrice = styled.span``;

export const AddToCartButton = styled.span``;

export const Indicator = styled.span`
width: 15px;
height: 15px;
line-height: 45px;
margin-left: 10px;
margin-right: 10px;
padding: 3px 8px;
border-radius: 50%;
color: #FFF;
font-size: 9px;
background-color: ${({activeButton}) => activeButton === 'active'?'#503921' :' #e1c2a6;'} ;
text-align: center;
cursor: pointer;
`