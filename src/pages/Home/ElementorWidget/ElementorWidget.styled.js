import Img from "../../../img/feature-info-col-bg.jpg";
import styled from "styled-components";


export const ElementorWidgetImage = styled.div`
background: url(${Img});
padding: 55px 35px;
position: relative; 
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const ElementorWidgetTitle=styled.h4`

font-size: 1.375rem;
    /* color: #fff; */
    font-size: 1.375rem;
    color: #fff;
    line-height: 1.5em;
    margin: 0 0 1.5em;
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