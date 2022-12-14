import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SharedLayout = lazy(() => import('./common/SharedLayout/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
