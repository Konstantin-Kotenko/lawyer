import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
color: white;
`

export const NavList = styled.ul`
background-color: black;
display: flex;
justify-content: space-between;
`

export const NavItem = styled.li`
padding: 15px;
list-style: none;
`