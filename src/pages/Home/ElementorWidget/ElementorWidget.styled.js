import Img from "../../../img/feature-info-col-bg.jpg";
import styled from "styled-components";


export const ElementorWidgetWrapper=styled.div`
padding:10px;
`
export const ElementorWidgetImage = styled.div`
padding: 55px 35px;
color:rgb(104,118,147);
background-size: cover;
background-image: -webkit-linear-gradient(90deg, #262b3e 62%, #c9b38c 96%, #c9b38c 97%, #c9b38c 100%), url(${Img});
/* background-image: -webkit-linear-gradient(90deg, #262b3e 62%, #c9b38c 96%, #c9b38c 97%, #c9b38c 100%); */
opacity: 0.95;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const ElementorWidgetTitle=styled.h4`

font-size: 1.375rem;
    /* color: #fff; */
    color: black;
    line-height: 1.5em;
    font-family: "Roboto Slab", serif;
    font-weight: 300;
`

export const ElementorWidgetLink = styled.a`
margin-top: 33px;
font-size: 0.875rem;
    padding: 12px 20px;
    background-color: white;
    color: #262b3e;
    font-weight: 700;
    border:0;
    border-radius: 0;
    text-transform: capitalize;
    padding: 12px 20px;
`