import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,

} from './NavbarElements'



const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>HCZ soluções</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Descubra</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Serviços</NavLinks>
                        </NavItem>    
                        <NavItem>
                            <NavLinks to='faleconosco'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}  
                            >Fale conosco</NavLinks>
                        </NavItem>  
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contato">Contato</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            
        </>
    )
}

export default NavBar
