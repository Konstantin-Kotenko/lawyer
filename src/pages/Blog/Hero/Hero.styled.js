import styled from "styled-components";

export const BlogList = styled.ul`
display: flex;
list-style: none;
justify-content: center;
`
export const BlogItem = styled.li`

:not(:last-child){
    margin-right: 15px;
:before{
        color: grey;
        padding: 0 5px;
        content: "/\00a0";
    }    
}
`