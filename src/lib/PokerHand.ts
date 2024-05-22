import MyCard from "./MyCard.ts";

class PokerHand {
    private cards: MyCard[];

    constructor(cards: MyCard[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        if (this.isFlush()) {
            return 'Флэш';
        }
        if (this.hasThreeOfAKind()) {
            return 'Тройка';
        }
        if (this.hasTwoPairs()) {
            return 'Две пары';
        }
        if (this.hasPair()) {
            return 'Одна пара';
        }
        return 'Старшая карта';
    }

    private isFlush(): boolean {
        const suits = this.cards.map(card => card.suit);
        return new Set(suits).size === 1;
    }

    private hasThreeOfAKind(): boolean {
        const ranks = this.cards.map(card => card.rank);
        for (const rank of ranks) {
            if (ranks.filter(r => r === rank).length === 3) {
                return true;
            }
        }
        return false;
    }

    private hasTwoPairs(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const uniqueRanks = new Set(ranks);
        let pairCount = 0;
        for (const rank of uniqueRanks) {
            if (ranks.filter(r => r === rank).length === 2) {
                pairCount++;
            }
        }
        return pairCount === 2;
    }

    private hasPair(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const uniqueRanks = new Set(ranks);
        for (const rank of uniqueRanks) {
            if (ranks.filter(r => r === rank).length === 2) {
                return true;
            }
        }
        return false;
    }
}

export default PokerHand;
