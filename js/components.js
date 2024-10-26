import React, { useState } from 'react';

const Card = ({ category, title, text, fullContent, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer" onClick={onClick}>
      <p className="text-gray-500">{category}</p>
      <h3 className="text-lg font-medium">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const Modal = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{card.title}</h3>
              <div className="mt-2">
                <div dangerouslySetInnerHTML={{ __html: card.fullContent }} />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
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
              onClick={() => setSelectedCard(card)}
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

export default PortfolioCards;
