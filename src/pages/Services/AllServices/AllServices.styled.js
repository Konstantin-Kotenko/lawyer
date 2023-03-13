import styled from "styled-components";
import Img from '../../../img/Philadelphia-Assault-Lawyer.jpg'

export const AllServicesWrapper = styled.div`
/* padding: 90px 0; */
background-image: url(${Img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /*  Comment out this line  */
  /* background-attachment:scroll; */
  position: relative;
  /* min-height: 320px; */
  /* min-width: 100vw; */
`
export const AllServicersText = styled.h3`
/* position: absolute;
bottom: 10%;
left: 10%;
color:  white;
padding-top: 100px; */
`

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin-left: -15px;
margin-right: -15px;
`

export const Item = styled.li`
position: relative;
max-width: 340px;
padding: 0 15px;
margin-bottom: 30px;
 /* :not(:last-child){
    margin-bottom: 30px;
} */
/* @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
 
@media (min-width: 768px) {
    width: calc(100% / 2 - 30px);
    display: flex;
    margin: 15px;
    flex-direction: column;
  }

@media (min-width: 1200px) {
    width: calc(100% / 3 - 30px);
  }  */
`