import React, {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
   display: flex;
   align-items: center;
   flex-direction: row;
   color: #e1e9fc;

   &:hover {
      background-color: #252831;
      border-left: 4px solid #632ce4;
   }
`

const SidebarLinkWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px; 
   list-style: none;
   gap: 1rem;
   font-size: 18px;

   
`

const SidebarLabel = styled.span``;

const DropdownLink = styled(Link)`
   background: #414757;
   height: 40px;
   padding-left: 3rem;
   display: flex;
   gap: 0.5rem;
   align-items: center;
   text-decoration: none;
   color: #f5f5f5;
   font-size: 16px;

`

const SubMenu = ({ item }: any) => {
   const [subnav, setSubnav] = useState<boolean>(false);

   const showSubNav = () => setSubnav(!subnav);
   return (
      <>
         <SidebarLink href={`${item.subNav ? '#' : item.path}`} onClick={item.subNav && showSubNav}>
            <SidebarLinkWrapper>
               {item.icon}
               <SidebarLabel>{item.title}</SidebarLabel>
            </SidebarLinkWrapper>
            <div>
               {item.subNav && subnav
                  ? item.iconOpened
                  : item.subNav ? item.iconClosed : null
               }
            </div>
         </SidebarLink>
         {subnav && item.subNav.map((item: any, index: number) => {
            return (
               <DropdownLink href={item.path} key={index}>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
               </DropdownLink>
            )
         })}
      </>
   )
}

export default SubMenu
