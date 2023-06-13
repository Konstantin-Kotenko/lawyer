import styled from 'styled-components';

 export const HeaderWrapper = styled.header`
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    min-width: 320px;
    color: rgb(255, 255, 255);
    background-color: black;
  /* box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px; */
    border-bottom: 1px solid white;
    @media (min-width: 992px){
      padding: 15px;
    }
`;

export const List = styled.ul`
  text-align: center;
  
  @media (min-width:  992px){
      display: flex;
      
  }

`;

export const Item = styled.li`
  text-align:center;
  vertical-align: middle;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  display: flex;
  align-items: center;  
  color: #FFFFFF;
  
  @media (max-width: 991px){
    :not(:first-child){
    margin-top: 10px;
  }
  }
  
  @media (min-width: 992px){
    margin-right: 20px;
  }
  list-style: none;
  font-size: 13px;
  
`;

export const Navigation = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 1170px;
  margin: 0 auto;
  
  @media (max-width: 991px){
    padding-top: 20px;
  }
  
  @media (min-width: 992px){
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    text-align: center;
    }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;

    @media (max-width: 991px){
      margin-top: 15px;
    }
`;

export const SocialItem = styled.li`
  list-style: none;
  text-decoration: none;
  color: white;
  cursor: pointer;
  
  :not(:last-child) {
    margin-right: 15px;
  }
  
  :hover,
  :focus{
  color: #c9b38c;
  }

`;
export const SocialItemLink = styled.a`
  color: white;
  text-decoration: none;
`;