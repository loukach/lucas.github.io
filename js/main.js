// Main CardGrid Component
const CardGrid = () => {
    const [selectedCard, setSelectedCard] = React.useState(null);
    const { config, cards } = window.portfolioData;

    return (
        <div>
            <PortfolioCards config={config} cards={cards} />
        </div>
    );
};

// Render the application
ReactDOM.render(<CardGrid />, document.getElementById('root'));
