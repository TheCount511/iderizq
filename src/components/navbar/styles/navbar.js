import styled from "styled-components/macro";

export const Container = styled.div `
display:flex;
flex-direction:column;
background-color:white;
z-index:1;
position: absolute;
width: 100%;
    width: stretch; 
    width: fill-available;
height:55px;
-webkit-box-shadow: -1px 0px 6px 3px rgba(181,181,181,0.43);
-moz-box-shadow: -1px 0px 6px 3px rgba(181,181,181,0.43);
box-shadow: -1px 0px 6px 3px rgba(181,181,181,0.43);
margin: 15px;

div:first-child{
    padding:0px 40px;
}
`

export const Logo = styled.h1 `
font-size:30px;
margin:0;
color: #ca9360;
user-select: none;
`

export const Link = styled.p `
cursor:pointer;
font-size: 14px;
margin-right: 50px;

:hover{
    color: #ca9360;
}
`

export const DropdownLink = styled.li `
list-style:none;
border-bottom: 0.5px solid #e1c2a6;
padding: 5px 10px 7px 10px;
transition: all 0.3s ease 0s;
color:#ca9360;

:hover{background-color: #e1c2a6;
    -webkit-box-shadow: -1px 2px 5px -1px rgba(202,147,96,0.53);
-moz-box-shadow: -1px 2px 5px -1px rgba(202,147,96,0.53);
box-shadow: -1px 2px 5px -1px rgba(202,147,96,0.53);
color: #FFF;
}
    
&:first-child {border-top: 1px solid #e1c2a6;}
&:last-child{border-bottom: 1px solid #e1c2a6;}
>${Link}{margin:0;

}
>${Link}:hover{color:#FFF}
`

export const DropdownMenu = styled.ul `
margin:0;
list-style: none;
display: none;
background-color: #FFF;
position: absolute;
padding: 10px 0 0 0;
width: 120px;
top: 45px;
right:${props => props.id === 1 ? "365px" : "210px"};
opacity: 0;
visibility: hidden;
-webkit-transition: opacity 200ms, visibility 200ms;
transition:opacity 200ms, visibility 200ms;
`

export const Dropdown = styled.div `
padding: 5px 0;

&:hover>${DropdownMenu} {
display: flex;
flex-direction:column;
z-index: 1;
visibility: visible;
opacity: 1;
animation: fade 0.5s;


}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
`


export const Group = styled.div `
display:flex;
flex-direction:row;
justify-content:${navbar => navbar ? "space-between" : ""};
align-items:${navbar => navbar ? "center" : ""};

>${Link}:last-of-type{
    margin-right: 10px;
}
`




export const NavIcon = styled.button `
cursor:pointer;
background-color:transparent;
border:0;
width:25px;
margin-left: 25px;

:hover{
    filter: invert(69%) sepia(7%) saturate(2584%) hue-rotate(347deg) brightness(90%) contrast(82%);
}
`

export const CartItems = styled.span `
padding: 1px 5px;
border-radius: 50%;
top: 4px;
right: 84px;
color: #FFF;
font-size: 14px;
background-color: #ca9360;
position: absolute;
:hover{
background-color:#af723a;
}
`

export const SearchInput = styled.input `
background-color: transparent;
outline: none;
border: 0;
width: 100%;
`
export const SearchBar = styled.div `
width:100% ;
display: flex;

line-height: ${({ searchActive }) => (searchActive === true ? "30px" : "0")};
height: ${({ searchActive }) => (searchActive === true ? "30px" : "0")};
padding: ${({ searchActive }) => (searchActive === true ? "5px 50px" : "0")};
transition: all .4s ease-in-out;
background: rgb(225,194,166);
background: linear-gradient(90deg, rgba(225,194,166,1) 0%, rgba(255,201,150,1) 34%, rgba(202,147,96,1) 78%);
margin-top: -1px;
outline-color: #e1c2a6;

>${SearchInput}{
padding: ${({ searchActive }) => (searchActive === true ? "5px" : "0")};
transition: all .3s ease-in-out;
}

`

export const CloseSearch = styled.img `
cursor:pointer
`