
const Navbar =({})=>{
    <Navbar>
        <Navbar.Logo>IDERIZQ</Navbar.Logo>
        <Navbar.NavLink>HOME</Navbar.NavLink>
        <Navbar.Dropdown>
        <Navbar.NavLink2>
            <Navbar.NavLink>SHOP</Navbar.NavLink>
            </Navbar.NavLink2>    
        </Navbar.Dropdown> 
        <Navbar.NavLink>BLOG</Navbar.NavLink>
        <Navbar.NavLink>PAGES</Navbar.NavLink>
        <Navbar.NavLink>CONTACT</Navbar.NavLink>
        <Navbar.Cart/>
        <Navbar.CartItems items={item}>{item}</Navbar.CartItems>
        <Navbar.SearchBar></Navbar.SearchBar>
    </Navbar>
}