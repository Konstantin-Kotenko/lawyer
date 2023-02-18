import { BiMenu } from "react-icons/bi";
import {Link, NavList, NavItem} from './Navigation.styled'

export const Navigation = () => {
    return (
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
        )
}