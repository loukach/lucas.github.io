var App = React.createClass({
  render: function() {
    return (
      <div>
        <PortfolioCards config={config} cards={cards} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));