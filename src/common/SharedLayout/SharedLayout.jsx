import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../Header';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
} from 'react-icons/fa';

const Container = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-gap: 16px;
`;

const List = styled.ul`
  display: flex;
  align-items: start;
`;

const Item = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-right: 50px;
  }
`;

const Navigation = styled.nav`
  align-items: center;
  justify-content: center;
  align-content: space-between;
  width: 1200px;
`;

const SocialList = styled.ul`
  display: flex;
  margin-left: auto;
`;

const SocialItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

const Logo = styled.h1`
  padding-left: 40px;
  margin-right: auto;
`;

const ServiceList = styled.ul`
  display: flex;
  align-items: start;
`;

const ServiceItem = styled.li`
  list-style: none;
  padding: 40px 30px;
`;

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <List>
            <Item>
              Call us : <a href="tel:0674259975">0674259975</a>
            </Item>
            <Item>
              Email us:
              <a href="mailto:kostya.kotenkoo@gmail.com">
                kostya.kotenkoo@gmail.com
              </a>
            </Item>
            <Item>
              Our address:
              <a href="https://www.google.com/maps/dir/50.3871031,30.2423264/Pushcha-Vodytsya,+Kyiv,+02000/@50.4630456,30.1598745,11z/data=!3m1!4b1!4m18!1m7!3m6!1s0x472b2d7cbab263ab:0xcd17a7b8c2df72a9!2sPushcha-Vodytsya,+Kyiv,+02000!3b1!8m2!3d50.5392207!4d30.3544038!4m9!1m1!4e1!1m5!1m1!1s0x472b2d7cbab263ab:0xcd17a7b8c2df72a9!2m2!1d30.3544038!2d50.5392207!3e2">
                Place
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
      </Header>
      <Header>
        <Navigation>
          <Logo>Alah</Logo>
          <ServiceList>
            <ServiceItem>Home</ServiceItem>
            <ServiceItem>Pages</ServiceItem>
            <ServiceItem>Shop</ServiceItem>
            <ServiceItem>Service</ServiceItem>
            <ServiceItem>Projects</ServiceItem>
            <ServiceItem>Blog</ServiceItem>
            <ServiceItem>Contact</ServiceItem>
          </ServiceList>
        </Navigation>
      </Header>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
