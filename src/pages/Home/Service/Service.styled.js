import styled from "styled-components";
import Img from '../../../img/ceo-img-min.jpg'

export const ServiceWrapper=styled.section`
padding-bottom: 110px;
margin: 0 -10px;
`

export const ServiceImage = styled.div`
min-width: 320px;
display: block;
/* width: 100%; */
min-height: 430px;
background-image:linear-gradient(rgba(47,48,58,0.4), rgba(47,48,58,0.4)), url(${Img});
background-size: contain;
background-position: center;
background-repeat: no-repeat;


position: relative;
background: linear-gradient(top, transparent, #262b3e);
/* padding: 50px 25px; */
`

export const ServiceInfoWrapper = styled.div`
padding:55px 25px;
position: absolute;
bottom: 0%;
right: 0%;
color: white;
`

export const ServiceTitle = styled.h4`
margin: 24px 0 5px;
`