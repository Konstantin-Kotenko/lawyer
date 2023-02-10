import styled from 'styled-components';
import { HeaderWrapper } from './Header.styled';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
} from 'react-icons/fa';

const List = styled.ul`
text-align: center;
`;

const Item = styled.li`
  :not(:first-child){
  margin-top: 10px;
  }
  list-style: none;
  font-size: 13px;
  
`;

const Navigation = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const SocialList = styled.ul`
margin-top: 15px;
  display: flex;
  justify-content: center;
  `;

const SocialItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Header = () => {
    return (
<HeaderWrapper>
        <Navigation>
          <List>
            <Item>
              Call us : <a href="tel:0674259975">0674259975</a>
            </Item>
            <Item>
              Email us : <a href="mailto:kostya.kotenkoo@gmail.com">
                kostya.kotenkoo@gmail.com
              </a>
            </Item>
            <Item>
              Our address : <a href="https://www.google.com/maps/dir/50.3871031,30.2423264/Pushcha-Vodytsya,+Kyiv,+02000/@50.4630456,30.1598745,11z/data=!3m1!4b1!4m18!1m7!3m6!1s0x472b2d7cbab263ab:0xcd17a7b8c2df72a9!2sPushcha-Vodytsya,+Kyiv,+02000!3b1!8m2!3d50.5392207!4d30.3544038!4m9!1m1!4e1!1m5!1m1!1s0x472b2d7cbab263ab:0xcd17a7b8c2df72a9!2m2!1d30.3544038!2d50.5392207!3e2">
                Placessssssssssssssssssssssssssssssssssssss
              </a>
            </Item>
          </List>
          <SocialList>
            <SocialItem>
              <FaInstagram />
            </SocialItem>
            <SocialItem>
              <FaFacebookF />
            </SocialItem>
            <SocialItem>
              <FaLinkedinIn />
            </SocialItem>
            <SocialItem>
              <FaTwitter />
            </SocialItem>
            <SocialItem>
              <FaSkype />
            </SocialItem>
          </SocialList>
        </Navigation>
      </HeaderWrapper>        
    )
}

