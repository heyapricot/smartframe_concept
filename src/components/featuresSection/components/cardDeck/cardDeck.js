const {bootstrapComponents:bootstrap} = require('../../../bootstrapComponents/bootstrapComponents');
const cardDeck = (cardTitles, columnQuantity) => {
    const node = bootstrap.createComponent('card-deck').node;
    const rows = ((cardTitles)=>{
        const rowQuantity = Math.ceil(cardTitles.length / columnQuantity);
    })(cardTitles, columnQuantity);
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