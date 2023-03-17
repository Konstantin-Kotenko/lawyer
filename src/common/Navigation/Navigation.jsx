import { BiMenu } from "react-icons/bi";
import {NavigationWrapper, Link, NavList, NavItem} from './Navigation.styled'

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavList>
            <NavItem>
                <Link to='/'>LOGO</Link>
                <Link to='blog'>BLOG</Link>
                <Link to='services'>Services</Link>
                <Link to='contact'>Contact</Link>
            </NavItem>
            <NavItem>
                <BiMenu color="White"/>
            </NavItem>
            </NavList>
        </NavigationWrapper>    
        )
}