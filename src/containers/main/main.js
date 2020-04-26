import React from 'react';
import { Link } from 'react-router-dom';

import './main.sass';

const Main = () => {
  return (
    <div className="games-list">
      <Link to="/happy-cat">
        <div className="games-list__item games-list__item--happy-cat" />
      </Link>

      <Link to="/">
        <div className="games-list__item games-list__item--new">
          coming soon
        </div>
      </Link>

      <Link to="/">
        <div className="games-list__item games-list__item--new">
          coming soon
        </div>
      </Link>
    </div>
  );
};

export default Main;
