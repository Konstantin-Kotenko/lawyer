import styled from "styled-components";

export const FirstTextWrapper = styled.div`
display: inline-block;
width: 360px ;
@media (min-width: 992px){
        padding: 0 15px;
    }


`

export const AboutFirstSpan = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    color: #c9b38c;
    text-transform: uppercase;

    @media (min-width: 992px){
        font-size: 1rem;
    }
`
export const AboutTitle = styled.h2`
    font-size: 1.6875rem;
    line-height: 1.19em;
    text-transform: capitalize;
    font-family: "Roboto Slab", serif;
    font-weight: 300;
    color: #262b3e;
    margin-top: 6px;

    @media (min-width: 992px){
        font-size: 2.25rem;
        font-weight: 300;
        line-height: 1.19em;
        text-transform: capitalize;
    }
`
export const AboutFirstText = styled.p`
    line-height: 1.7em;
    color: #687693;
    font-size: 14px;
    margin-top: 19px;
`

export const AboutImage = styled.img`
    display: block;
   @media (max-width: 991px){
        margin: 50px auto 0;
    }
    
   @media (min-width: 992px){
        padding: 0 15px;
    }

`

export const AboutSecondText = styled.p`
    line-height: 1.7em;
    color: #687693;
    font-size: 14px;
    font-weight:400;
    @media (max-width:  991px){
        margin-top:40px;
        font-size: 16px;
    }

`

export const AboutSecondTextFirstLatter = styled.span`
    line-height: 1.7em;
    color: #687693;
    font-size: 25px;
    font-weight:400;
`


export const AboutName = styled.h3`
    font-weight: 400;
    font-size: 1rem;
    color: #262b3e;
    line-height: 1.1;
    margin-top: 21px;
`
export const AboutSeondSpan = styled.span`
    font-size: 0.8125rem;
    color: #687693;
    font-weight: 400;
    margin-top: 5px;
`

export const AboutContainer = styled.div`
    /* display: inline-block; */
    /* max-width: 1400px; */
    /* margin: 0 auto; */

    padding: 90px 0;
    @media (min-width: 992px){
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }
`

export const SecondTextWrapper = styled.div`
    display: inline-block;
    width: 360px;
    @media (min-width: 992px){
        padding: 0 15px;
    }
`
