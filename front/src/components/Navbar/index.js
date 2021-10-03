import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavImage
  } from './NavbarComponents';
import logo from './logo192.png';

const Navbar = () =>  {
    return (
        <Nav>
            <img src={logo}  activeStyle/> 
            <Bars />
            <NavMenu>
                <NavLink to={{ pathname: "https://eic.ucn.cl" }} target="_blank" activeStyle>
                    EIC
                </NavLink>
                <NavLink to={{ pathname: "https://tongoy.ucn.cl" }} target="_blank"  activeStyle>
                    TONGOY
                </NavLink>
                <NavLink to='/mallas' activeStyle>
                    MALLAS
                </NavLink>
                <NavLink to='/OA' activeStyle>
                    OFERTA ACADÉMICA
                </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;
