import { BiMenu } from "react-icons/bi";
import {Link, NavList, NavItem} from './Navigation.styled'

export const Navigation = () => {
    return (
        <NavList>
            <NavItem>
                <Link to='/'>LOGO</Link>
            </NavItem>
            <NavItem>
                <BiMenu color="White"/>
            </NavItem>
        </NavList>
        )
}