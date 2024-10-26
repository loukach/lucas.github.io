const { config, cards } = window.portfolioData;

class App extends React.Component {
  render() {
    return (
      <div>
        <PortfolioCards config={config} cards={cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));