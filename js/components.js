// Modal Component
const Modal = ({ card, onClose }) => {
    if (!card) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 modal-overlay" 
             onClick={onClose}>
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-xl" 
                 onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-sm font-semibold text-blue-600 mb-2">{card.category}</span>
                        <h2 className="text-3xl font-bold">{card.title}</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                        ×
                    </button>
                </div>
                <div className="prose max-w-none whitespace-pre-line">
                    {card.fullContent}
                </div>
            </div>
        </div>
    );
};

// Card Component
const Card = ({ category, title, text, fullContent, onClick }) => {
    return (
        <div 
            className="group h-48 w-48 [perspective:1000px] cursor-pointer card-hover-effect"
            onClick={() => onClick({ category, title, text, fullContent })}
        >
            <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute h-full w-full bg-black text-white rounded-lg p-4 [backface-visibility:hidden]">
                    <div className="text-sm font-semibold text-blue-300 mb-2">{category}</div>
                    <h2 className="text-xl font-bold text-center mt-8">{title}</h2>
                </div>
                
                {/* Back of card */}
                <div className="absolute h-full w-full bg-white text-black rounded-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-black">
                    <p className="text-center mt-8 text-sm">{text}</p>
                </div>
            </div>
        </div>
    );
};