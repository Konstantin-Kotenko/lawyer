import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: black;
  padding: 50px 0 60px;
  display: block;
  
  @media (min-width: 992px){
    display: flex;
    justify-content: space-around;
    vertical-align: middle;
    align-items: center;
  }
`
export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  @media (max-width: 991px){
    margin-bottom: 25px;
  }
`
export const SocialIcon = styled.li`
  width: 44px;
  height: 44px;
  cursor: pointer;
  
  :not(:last-child){
      margin-right: 10px;
  }
`

export const SocialIconLink = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;  
  
  :hover,
  :focus{
  color: white;
  background-color: #c9b38c;
  }
  `
export const Link = styled(NavLink)`
  color: white;
  vertical-align: middle;
  align-items: center;
  text-align: center;
  display: block;
  text-decoration: none;

  @media (max-width: 991px){
    margin-bottom: 25px;
  }
 `