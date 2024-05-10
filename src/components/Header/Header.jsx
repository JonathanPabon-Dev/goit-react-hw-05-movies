import React from 'react';
import { Head, Logo, Link } from './Header.styled';
import { Content } from '../App.styled';

export const Header = () => {
  return (
    <Head>
      <Content>
        <Logo>
          <span>M</span>
          <i className="bi bi-film"></i>
          <span>M</span>
        </Logo>
        <nav>
          <Link to="goit-react-hw-05-movies/" end>
            Home
          </Link>
          <Link to="goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Content>
    </Head>
  );
};
