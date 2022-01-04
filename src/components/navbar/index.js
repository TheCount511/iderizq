import {
    Container, Logo, Group, Link, Dropdown, DropdownMenu, DropdownLink,
    NavIcon, CartItems, SearchBar, SearchInput, CloseSearch
} from "./styles/navbar"
import search from '../../svg/icons/search.svg'
import cart from '../../svg/icons/cart.svg'
import clear from '../../svg/icons/clear.svg'

const Navbar = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}


Navbar.Logo = ({ children, ...restProps }) => {

    return <Logo {...restProps}>{children}</Logo>
}

Navbar.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{children}</Group>
}


Navbar.NavLink = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>
}

Navbar.Dropdown = ({ children, ...restProps }) => {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Navbar.DropdownMenu = ({ children, ...restProps }) => {
    return <DropdownMenu {...restProps}>{children}</DropdownMenu>
}

Navbar.DropdownLink = ({ children, ...restProps }) => {
    return <DropdownLink {...restProps}>{children}</DropdownLink>
}


Navbar.CartIcon = ({ children, ...restProps }) => {
    return (
    <div>
    <NavIcon {...restProps}>
        <img src={cart} alt="cart" />
    </NavIcon>
    <CartItems>{{...restProps}.cartItem}</CartItems>
    </div>)
}
Navbar.SearchIcon =params => {
    return <NavIcon onClick={params.onClick}>
        <img src={search} alt="search" />
    </NavIcon>
}

Navbar.SearchBar = ({ onClick, searchActive,...restProps }) => {

    return (
        <SearchBar searchActive={searchActive} >
            <SearchInput
                placeholder="Type here to search"
            />
            <CloseSearch src={clear} alt="close" onClick={onClick} />
        </SearchBar>

    )
}



export default Navbar;