import {useState} from "react";
import './App.css';
import Card from "./components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";

interface Card  {
    rank: string;
    suit: string;
}

const App = () => {
    const [hand, setHand] = useState<Card[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const cards = deck.getCards(5);
        setHand(cards);
    };

        return (
            <div className='App'>
                {hand.length === 0 ? (
                    <button onClick={dealCards}>Раздать карты</button>
                ) : (
                    <div>
                        <button onClick={dealCards}>Раздать новые карты</button>
                        <div className="playingCards faceImages">
                            {hand.map((card, index) => (
                                <Card key={index} rank={card.rank} suit={card.suit} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

export default App;