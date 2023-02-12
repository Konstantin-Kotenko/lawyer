import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
width: 20px;
height:20px;
color: white;
`

export const NavList = styled.ul`
background-color: rgba(38, 43, 62, 0.5);
display: flex;
justify-content: space-between;
`

export const NavItem = styled.li`
padding: 15px;
list-style: none;
`