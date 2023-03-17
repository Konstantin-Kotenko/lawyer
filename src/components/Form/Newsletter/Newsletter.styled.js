import { Field, Form } from "formik";
import styled from "styled-components";

export const FormNewsletter = styled(Form)`
display: block;
/* margin: 0 auto; */
text-align: center;
`

export const Input = styled(Field)`
text-decoration: none;
border: none;
border-radius: 4px;
`

export const Button = styled.button`
background-color: white;
color: white;
:hover{
    color: grey;
    background-color: grey;
}
`

export const TitleNewsletter = styled.p`
    color: white;
    margin-bottom: 25px;
    text-align: center;
    vertical-align: middle;
`