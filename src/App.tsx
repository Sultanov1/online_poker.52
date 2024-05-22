import {useState} from "react";
import './App.css';
import Card from "./components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import PokerHand from "./lib/PokerHand.ts";

interface Card  {
    rank: string;
    suit: string;
}

const App = () => {
    const [hand, setHand] = useState<Card[]>([]);
      const [outcome, setOutcome] = useState<string>('');

    const dealCards = () => {
        const deck = new CardDeck();
        const cards = deck.getCards(5);
        setHand(cards);

          const pokerHand = new PokerHand(cards);
            const currentOutcome = pokerHand.getOutcome();
            setOutcome(currentOutcome);
    };

        return (
            <div className='App'>
                <div>{hand.length === 0 ? <p>Результат раунда: пусто</p> : `Результат раунда: ${outcome}`}</div>
                {hand.length === 0 ? (
                    <button onClick={dealCards}>Раздать карты</button>
                ) : (
                    <div>
                        <button onClick={dealCards}>Раздать карты</button>
                        <div className="playingCards faceImages">
                            {hand.map((card, index) => (
                                <Card key={index} rank={card.rank} suit={card.suit}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

export default App;