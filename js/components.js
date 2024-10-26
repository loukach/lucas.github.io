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
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">{card.category}</p>
            <p>{card.text}</p>
            <div className="mt-4">
              <div dangerouslySetInnerHTML={{ __html: card.fullContent }} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
