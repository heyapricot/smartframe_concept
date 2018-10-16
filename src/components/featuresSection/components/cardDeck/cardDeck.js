const {bootstrapComponents:bootstrap} = require('../../../bootstrapComponents/bootstrapComponents');
const cardDeck = (cardTitles, columnQuantity) => {
    const node = bootstrap.createComponent('container').node;
    const rowQuantity = Math.ceil(cardTitles.length / columnQuantity);
    const rows = ((cardTitles, rowQuantity, parentNode)=>{
        const rowArray = [];
        for (let i = 0; i < rowQuantity; i++){
            let row = bootstrap.Row(1,[],parentNode);
            let deck = bootstrap.createComponent('card-deck',[],row.columns[0].node);
            rowArray.push(deck);
        }
        return rowArray;
    })(cardTitles, rowQuantity, node);

    let cards = ((cardTitles, cardQuantity)=>{
        let cardArray = [];
        let contentLength = cardTitles.length;
        for(let i = 0; i < cardQuantity; i++){
            let card = NaN;
            i < contentLength ? card = bootstrap.Card(cardTitles[i]) : card = bootstrap.Card('', ['border-0']);
            cardArray.push(card);
        }
        return cardArray;
    })(cardTitles, rowQuantity * columnQuantity);

    const insertCards = ((cards,rows,columnQuantity)=>{
        cards.forEach((card,index)=>{
            let currentRow = Math.floor(index / columnQuantity);
            rows[currentRow].node.appendChild(card.node);
        });
    })(cards,rows,columnQuantity);

    return {cards, node}
};

module.exports = {
    cardDeck:cardDeck
};