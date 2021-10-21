import React from 'react';
import {Nav, NavLink, Bars, NavMenu,NavBtn, NavBtnLink} from './Navigation'




export default function NavBar() {
    return (
        <>
           <Nav> 
               <NavLink to = "/">
                   <img src={require('../../Assets/LogoEIC.svg')} alt='logo'/>
               </NavLink>
               <Bars />
               <NavMenu>
                   <NavLink to="/Home" activeStyle>
                       HOME
                   </NavLink>
                   <NavLink to={{ pathname: "https://tongoy.ucn.cl"}} target="_blank" activeStyle>   
                        TONGOY
                   </NavLink>
                   <NavLink to= {{ pathname: "https://eic.ucn.cl"}} target="_blank" activeStyle>   
                        EIC
                   </NavLink>
                   <NavLink to="/mallas" activeStyle>   
                        MALLAS
                   </NavLink>
                   <NavLink to="/oa" activeStyle>   
                        OFERTA  ACADEMICA
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to = '/signin'>
                        Salir
                   </NavBtnLink>
               </NavBtn>
            </Nav> 
        </>
    )
}




