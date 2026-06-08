
import React from 'https://esm.sh/react@18';
import ReactDOM from 'https://esm.sh/react-dom@18/client';


const { useState, useEffect } = React;

const initialCards = [
  { value: '🐱', id: 1 }, { value: '🐱', id: 2 },
  { value: '🐶', id: 3 }, { value: '🐶', id: 4 },
  { value: '🦊', id: 5 }, { value: '🦊', id: 6 },
  { value: '🦁', id: 7 }, { value: '🦁', id: 8 },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const resetGame = () => {
    const shuffledCards = [...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, isFlipped: false, canMatch: true }));
    
    setCards(shuffledCards);
    setSelectedCards([]);
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleCardClick = (index) => {
    if (disabled || cards[index].isFlipped || !cards[index].canMatch) return;

    if (selectedCards.length === 1 && selectedCards[0].index === index) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    setSelectedCards([...selectedCards, { ...newCards[index], index }]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setDisabled(true); 

      const [first, second] = selectedCards;

      if (first.value === second.value) {
        setCards(prevCards => prevCards.map((card, idx) => 
          idx === first.index || idx === second.index 
            ? { ...card, canMatch: false } 
            : card
        ));
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prevCards => prevCards.map((card, idx) => 
            idx === first.index || idx === second.index 
              ? { ...card, isFlipped: false } 
              : card
          ));
          resetTurn();
        }, 1000);
      }
    }
  }, [selectedCards]);

  const resetTurn = () => {
    setSelectedCards([]);
    setDisabled(false);
  };

  return (
    <div className="game-container">
      <h2>Jogo da Memória</h2>
      <button onClick={resetGame}>Reiniciar</button>
      
      <div className="board">
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            className={`card ${card.isFlipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-content">
              {card.isFlipped ? card.value : '❓'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MemoryGame />);