import { useState } from "react";
import { Navbar } from "../components";

const Navigation = () => {
    const user = { name: 'Fadhil', cartItems: [123, 345, 987, 678] }
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const ToggleSearch =()=>{
        setSearchActive(searchActive=>!searchActive)
    }
   

    return (
        <Navbar>
            <Navbar.Group navbar>
                <Navbar.Logo>IDERIZQ</Navbar.Logo>
                <Navbar.Group>
                    <Navbar.NavLink>HOME</Navbar.NavLink>
                    <Navbar.Dropdown>
                        <Navbar.NavLink>SHOP</Navbar.NavLink>
                        <Navbar.DropdownMenu id={1}>
                            <Navbar.DropdownLink>
                            <Navbar.NavLink>Categories</Navbar.NavLink>
                            </Navbar.DropdownLink>
                        </Navbar.DropdownMenu>
                    </Navbar.Dropdown>

                        <Navbar.NavLink>BLOG</Navbar.NavLink>

                    <Navbar.Dropdown>
                        <Navbar.NavLink>ACCOUNT</Navbar.NavLink>
                        <Navbar.DropdownMenu id={2}>
                            <Navbar.DropdownLink>
                                <Navbar.NavLink>My Account</Navbar.NavLink>
                            </Navbar.DropdownLink>
                            <Navbar.DropdownLink>
                                <Navbar.NavLink>Login</Navbar.NavLink>
                            </Navbar.DropdownLink>
                            <Navbar.DropdownLink>
                                <Navbar.NavLink>Cart</Navbar.NavLink>
                            </Navbar.DropdownLink>
                            <Navbar.DropdownLink>
                                <Navbar.NavLink>Tracking</Navbar.NavLink>
                            </Navbar.DropdownLink>
                        </Navbar.DropdownMenu>
                    </Navbar.Dropdown>

                    <Navbar.NavLink>CONTACT</Navbar.NavLink>
                    <Navbar.CartIcon cartItem={user.cartItems.length} />
                    <Navbar.SearchIcon onClick={ToggleSearch}>
                    </Navbar.SearchIcon>
                </Navbar.Group>
            </Navbar.Group>
            <Navbar.SearchBar  searchActive={searchActive} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClick={ToggleSearch}/>
        </Navbar>)
};
export default Navigation