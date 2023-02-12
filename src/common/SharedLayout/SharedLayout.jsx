// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import styled from 'styled-components';
import { Header } from '../Header/Header';
import {Navigation} from '../Navigation/Navigation'
// import { Hero } from '../Hero/Hero';
// import Home from '../../pages/Home'
// const Container = styled.main`
//   margin: 0 auto;
//   padding: 0 20px;
//   display: grid;
//   grid-gap: 16px;
// `;

// const Navigation = styled.nav`
//   align-items: center;
//   justify-content: center;
//   align-content: space-between;
//   width: 1200px;
// `;

// const Logo = styled.h1`
//   padding-left: 40px;
//   margin-right: auto;
// `;

// const ServiceList = styled.ul`
//   display: flex;
//   align-items: start;
// `;

// const ServiceItem = styled.li`
//   list-style: none;
//   padding: 40px 30px;
// `;

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Navigation/>
      <Outlet/>
    </>
  );
};

export default SharedLayout;
