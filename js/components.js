const Title = () => {
    return (
        <h1 className="main-title">Welcome to My Simple Website</h1>
    );
};

const Tile = ({ title, content }) => {
    return (
        <div className="tile">
            <h2>{title}</h2>
            <p>{content}</p>
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