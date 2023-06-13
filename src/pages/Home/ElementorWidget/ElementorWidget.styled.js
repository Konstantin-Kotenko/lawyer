import styled from "styled-components";

export const ElementorWidgetWrpper = styled.div`
    padding: 0 15px 65px;
`


export const ElementorWidgetList = styled.ul`
    justify-content: center;
    width: 100%;
    @media (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        margin: -15px;
    }
`

export const ElementorWidgetItemWrapper = styled.li`
    width: 100%;
    :not(:last-child){
        @media (max-width: 767px){
            margin-bottom: 30px;
        }
    }

    @media (min-width:768px){
        width: calc(100% / 2 - 30px);
        display: flex;
        margin: 15px;
        flex-direction: column;
    }

    @media (min-width: 1200px){
        width: calc(100% / 3 - 30px);
    }
`

export const ElementorWidgetItem = styled.div`
    /* padding: 75px 35px; */
    border: 2px solid #c9b38c;
    max-width: 200px;
    @media (min-width: 380px){
    margin: 20px;
    }

    :hover{
    color: white;
    background-color: #c9b38c;
}

`

export const ElementorWidgetTitle = styled.h3`
text-align: center;
justify-content: center;
align-items: center;
margin: 0 auto;
`
