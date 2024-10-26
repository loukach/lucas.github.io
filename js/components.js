const Title = () => {
    return (
        <h1 className="main-title">Cards Against Developers</h1>
    );
};

const Tile = ({ title, content }) => {
    return (
        <div className="tile">
            <div className="tile-front">
                <h2>{title}</h2>
            </div>
            <div className="tile-back">
                <p>{content}</p>
            </div>
        </div>
    );
};

const TileContainer = () => {
    return (
        <div className="tile-container">
            {tilesData.map(tile => (
                <Tile 
                    key={tile.id}
                    title={tile.title}
                    content={tile.content}
                />
            ))}
        </div>
    );
};