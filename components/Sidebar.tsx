"use client"

import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '@/constants/sidebardata'
import SubMenu from './SubMenu';

const Nav = styled.div`
   background: #15171c;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

const NavIcon = styled(Link)`
   margin-left: 2rem;
   font-size: 2rem;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

const SidebarNav = styled.nav`
   background: #15171c;
   width: 250px;
   height: 100vh;
   display: flex;
   justify-content: center;
   position: fixed;
   top: 0;
   left: ${({ sidebar }: any) => (sidebar ? '0' : '-100%')};
   transition: 1000ms ease-in;
`

const SidebarWrap = styled.div`
   width: 100%;
`


const Sidebar = () => {
   const [sidebar, setSidebar] = useState<boolean>(false);

   const showSidebar = () => {
      console.log(!sidebar);
      setSidebar(!sidebar)
   };
   return (
      <>
         <Nav>
            <NavIcon href="#">
               <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
         </Nav>
         <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
               <NavIcon href={"#"}>
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
               </NavIcon>
               {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index}/>;
               })}
            </SidebarWrap>
         </SidebarNav>
      </>
   )
}

export default Sidebar
