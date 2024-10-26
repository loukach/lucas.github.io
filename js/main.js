import { config, cards } from './data.js';
import PortfolioCards from './components.js';

const CardGrid = () => {
  return (
    <div>
      <PortfolioCards config={config} cards={cards} />
    </div>
  );
};

ReactDOM.render(<CardGrid />, document.getElementById('root'));
