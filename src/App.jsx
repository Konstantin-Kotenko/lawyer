import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SharedLayout = lazy(() => import('./common/SharedLayout/SharedLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Blog = lazy(() => import('./pages/Blog/Blog'))
const Services =lazy(()=>import('./pages/Services/Services'))
const Contact =lazy(()=>import('./pages/Contact/Contact'))

export const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={ <Contact/>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
