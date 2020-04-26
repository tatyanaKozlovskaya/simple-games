import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.sass';

const App = () => {
  return (
    <div className="games-list">
      <a
        className="games-list__item games-list__item--happy-cat"
        href="/happy-cat"
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
