import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Content } from './App.styled';

import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { Header } from '../components/Header/Header';

const HomeLazy = lazy(() => import('../pages/Home'));
const MovieDetailsLazy = lazy(() => import('../pages/MovieDetails'));
const CastLazy = lazy(() => import('../pages/Cast'));
const ReviewsLazy = lazy(() => import('../pages/Reviews'));

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route
            path="goit-react-hw-05-movies/"
            element={
              <Suspense>
                <HomeLazy />
              </Suspense>
            }
          />
          <Route path="goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route
            path="goit-react-hw-05-movies/movies/:id"
            element={
              <Suspense>
                <MovieDetailsLazy />
              </Suspense>
            }
          >
            <Route path="cast" element={<CastLazy />} />
            <Route path="reviews" element={<ReviewsLazy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
