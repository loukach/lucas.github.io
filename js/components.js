class Card extends React.Component {
  render() {
    const { category, title, text, fullContent, onClick } = this.props;
    return (
      <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer" onClick={onClick}>
        <p className="text-gray-500">{category}</p>
        <h3 className="text-lg font-medium">{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
}

class Modal extends React.Component {
  render() {
    const { card, onClose } = this.props;
    if (!card) return null;

    return (
      // ... modal content
    );
  }
}

class PortfolioCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
    };
  }

  render() {
    const { config, cards } = this.props;
    const { selectedCard } = this.state;

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
                onClick={() => this.setState({ selectedCard: card })}
              />
            ))}
          </div>
        </div>
        <Modal
          card={selectedCard}
          onClose={() => this.setState({ selectedCard: null })}
        />
      </div>
    );
  }
}