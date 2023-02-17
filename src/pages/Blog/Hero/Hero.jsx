import { NavLink } from "react-router-dom"
import { BlogList,BlogItem } from "./Hero.styled"

export const Hero = () => {
    return (
        <>
            <h2>Blog</h2>
            <nav>
                <BlogList>
                    <BlogItem><NavLink to='/'>Home</NavLink> </BlogItem>
                    <BlogItem><span>Blog</span></BlogItem>
                </BlogList>
            </nav>
        </>
    )
}