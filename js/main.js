import PortfolioCards from './components.js';
import { config, cards } from './data.js';

window.portfolioData = { config, cards };

ReactDOM.render(<PortfolioCards />, document.getElementById('root'));
