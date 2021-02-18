import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,SideBtnWrap,SidebarMenu,SidebarLink,SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Descubra
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="faleconosco" onClick={toggle}>
                        Fale Conosco
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contato">Contato</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
