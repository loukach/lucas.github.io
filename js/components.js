// Utility functions
const getTypeStyles = (type) => {
    switch (type) {
        case 'achievement':
            return 'bg-orange-100 border-l-4 border-orange-500';
        case 'skill':
            return 'bg-amber-50 border-l-4 border-amber-500';
        case 'feedback':
            return 'bg-rose-50 border-l-4 border-rose-500';
        default:
            return 'bg-white border-l-4 border-gray-500';
    }
};

const getTypeLabel = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
};

// Components
const Title = () => {
    return (
        <h1 className="main-title">Pst pst, hey wanna product?</h1>
    );
};

// In components.js
const Tile = ({ title, content, type }) => {
    return (
        <div className="tile" data-type={type || 'default'}>  
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
                    type={tile.type} 
                />
            ))}
        </div>
    );
};