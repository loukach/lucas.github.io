import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioCards from './components.js';
import { config, cards } from './data.js';

window.portfolioData = { config, cards };

const App = () => {
  return (
    <div>
      <PortfolioCards />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
