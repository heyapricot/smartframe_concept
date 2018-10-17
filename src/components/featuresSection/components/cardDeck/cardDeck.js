const {bootstrapComponents:bootstrap} = require('../../../bootstrapComponents/bootstrapComponents');
const cardDeck = (cards, columnQuantity) => {
    const node = bootstrap.createComponent('container').node;
    const rowQuantity = Math.ceil(cards.length / columnQuantity);
    const rows = ((rowQuantity, parentNode)=>{
        const rowArray = [];
        for (let i = 0; i < rowQuantity; i++){
            let row = bootstrap.Row(1,['mb-3'],parentNode);
            let deck = bootstrap.createComponent('card-deck',[],row.columns[0].node);
            rowArray.push(deck);
        }
        return rowArray;
    })(rowQuantity, node);

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