import React from "react";
import {Link} from 'react-router-dom';
import {FooterContainer,Shopping,CopyWrite} from './footerStyle'
export default function  Footer() {
    const links = [
        "help","products","info","contacts","develops","lifestyle"        
    ]
        return(
            <>
                <FooterContainer>
                    <Shopping> shopping.com 
                    <i className="fas fa-tags"></i>
                    </Shopping>
                <ul>
                    {links.map((link,i)=> <li key={i}> <Link to="/:page"> {link} </Link></li> )}
                </ul>
                </FooterContainer>
                <CopyWrite>
                    designed by <i className="fas fa-heart"></i>  {"khaled Seleem"} 
                </CopyWrite>
        </>
   )
}