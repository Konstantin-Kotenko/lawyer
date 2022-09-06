import {Header} from '../Header/Header.styled';

const Container = styled.main`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-gap: 16px;
`;

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
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
