import styled from "styled-components";

export const FooterWrapper = styled.footer`
background-color: black;
padding: 10px;
`
export const SocialList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
`
export const SocialIcon = styled.li`
width: 44px;
height: 44px;
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
