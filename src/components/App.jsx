import { Route, Routes } from 'react-router-dom';
import { Content } from './App.styled';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
import { NotFound } from '../pages/NotFound';
import { Header } from '../components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
