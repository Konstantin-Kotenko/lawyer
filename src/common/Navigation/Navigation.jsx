import {
FaHamburger
} from 'react-icons/fa';
import {Link, NavList, NavItem} from './Navigation.styled'

export const Navigation = () => {
    return (
        <NavList>
            <NavItem>
                <Link to='/'>LOGO</Link>
            </NavItem>
            <NavItem>
                <FaHamburger color='white'/>
            </NavItem>
        </NavList>
        )
}