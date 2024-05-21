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

    if (hand.length === 0) {
        return (
            <div className='btn-block'>
                <button onClick={dealCards}>Раздай карты</button>
            </div>
        );
    }else {
        return (
            <div>
                <div className="playingCards faceImages">
                    {hand.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={`${card.suit}`}/>
                    ))}
                </div>
                <button onClick={dealCards}>Раздай карты</button>
            </div>
        );
    }
};

export default App;