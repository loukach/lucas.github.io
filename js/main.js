// Main CardGrid Component
const CardGrid = () => {
    const [selectedCard, setSelectedCard] = React.useState(null);
    const { config, cards } = window.portfolioData;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">{config.title}</h1>
                <p className="text-center mb-12 text-gray-600">{config.subtitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {cards.map((card, index) => (
                        <Card 
                            key={index} 
                            {...card} 
                            onClick={setSelectedCard}
                        />
                    ))}
                </div>
            </div>
            <Modal 
                card={selectedCard} 
                onClose={() => setSelectedCard(null)}
            />
        </div>
    );
};

// Render the application
ReactDOM.render(<CardGrid />, document.getElementById('root'));