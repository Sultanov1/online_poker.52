import MyCard from "./MyCard.ts";

class CardDeck {
    private cards: MyCard[];

    constructor() {
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new MyCard(rank, suit));
            }
        }
    }

    public getCard(): MyCard {
        const randomCard = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomCard, 1)[0];
    }

    public getCards(howMany: number): MyCard[] {
        const selectedCards: MyCard[] = [];
        for (let i = 0; i < howMany; i++) {
            selectedCards.push(this.getCard());
        }
        return selectedCards;
    }
}

export default CardDeck;