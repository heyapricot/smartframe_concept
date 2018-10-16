const {bootstrapComponents:bootstrap} = require('../../../bootstrapComponents/bootstrapComponents');
const cardDeck = (cardTitles) => {
    const node = bootstrap.createComponent('card-deck').node;
    let cards = ((cardTitles, parentNode)=>{
        let cardArray = [];
        cardTitles.forEach((title)=>{
            let card = bootstrap.Card(title);
            cardArray.push(card);
            parentNode.appendChild(card.node);
        });
        return cardArray;
    })(cardTitles, node);

    return {cards, node}
};

module.exports = {
    cardDeck:cardDeck
};