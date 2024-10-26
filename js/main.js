const App = () => {
    return (
        <div className="app">
            <Title />
            <TileContainer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);