const Navbar =({children, ...restProps})=>{
    return <Container {...restProps}>{children}</Container>
}

Navbar.Logo =({children, ...restProps})=>{
    <Logo {...restProps}>{children}</Logo>
}

Navbar.SearchBar =({children, ...restProps})=>{
    <SearchBar {...restProps}>{children}</SearchBar>
}

Navbar.CartIcon =({children, ...restProps})=>{
    <CartIcon {...restProps}>{children}</CartIcon>
}
Navbar.CartItems =({children, ...restProps})=>{
    <CartItems {...restProps}>{children}</CartItems>
}

Navbar.Link=({children, ...restProps})=>{
    <NavLink {...restProps}>{children}</NavLink>
}



export default Navbar;