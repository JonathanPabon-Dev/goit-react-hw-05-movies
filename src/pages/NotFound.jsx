import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="container">
      <span
        style={{
          color: '#313b70',
          opacity: 0.2,
          width: '100%',
          height: 'calc(100vh - 100px)',
          fontSize: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Page Not Found
      </span>
      <Link className="d-flex justify-content-center" to="/">
        Go Home
      </Link>
    </div>
  );
};
