import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <section className="notfound">
      <div className="notfound__container">
        <div className="notfound__content">
          <h2 className="notfound__title">404</h2>
          <h3 className="notfound__subtitle">Oops! Page Not Found</h3>
          <br />
          <div className="notfound__buttons">
            <Link to="/" className="notfound__button notfound__button--primary">
              Back to Home
            </Link>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default NotFound;