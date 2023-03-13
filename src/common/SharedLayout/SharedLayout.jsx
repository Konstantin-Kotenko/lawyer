// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import {Navigation} from '../Navigation/Navigation'
import { Footer } from '../Footer/Footer';
// import { Hero } from '../Hero/Hero';
// import Home from '../../pages/Home'


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
      <Outlet />
      <Footer/>
    </>
  );
};

export default SharedLayout;
