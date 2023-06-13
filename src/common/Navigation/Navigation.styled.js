import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
color: white;
`

export const NavigationWrapper = styled.nav`
    background-color: black;
`

export const Wrapper = styled.div`
    padding: 15px;
`

export const NavList = styled.ul`
max-width: 1170px;
margin: 0 auto;
background-color: black;
display: flex;
justify-content: space-between;
`

export const NavItem = styled.li`
padding: 15px;
list-style: none;
`