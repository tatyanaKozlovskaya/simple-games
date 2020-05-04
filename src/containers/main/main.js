import React from 'react';
import { Link } from 'react-router-dom';

import './main.sass';

const Main = () => {
  return (
    <div className="games-list">
      <Link to="/spider-cat">
        <div className="games-list__item games-list__item--spider-cat" />
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
      <div>version {1.8}</div>
    </div>
  );
};

export default Main;
