import styled from "styled-components";
import Img from '../../../img/slide-2-min.jpg'

export const HeroSection =styled.section`
background-image:url(${Img});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
max-width: 100%;
height: 100%;

`
export const HeroWrapper = styled.div`
padding: 90px 30px;
align-items: center;
justify-content: center;
text-align: center;
`

export const TitleHeroSection=styled.h1`
font-weight:300;
line-height: 1.1;
font-size: 2.5rem;
color:#fff;
font-family: "Roboto Slab", serif;
`
export const HeroText=styled.p`
margin-top:15px;
font-size: 1rem;
font-weight: 600;
color: #fff;
line-height: 1.7em;
`

export const HeroButton=styled.button`
margin-top: 40px;
padding: 12px 20px;
font-size: 0.875rem;
font-weight: 700;
border:0;
background-color: #c9b38c;
color: #fff;
`