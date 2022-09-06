import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../Header';

const Container = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-gap: 16px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  list-style: none;
`;

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
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
              Our address:<a></a>
            </Item>
          </List>
        </nav>
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
