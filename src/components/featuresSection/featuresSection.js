const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const {cardDeck:Deck} = require('./components/cardDeck/cardDeck');
const {tabBar} = require('./components/tabBar/tabBar');
const featuresSection = (()=>{
    const node = document.createElement('section');
    const grid = ((parentNode)=>{
        const node = bootstrap.createComponent('container',[],parentNode);
        const rows = ((rowQuantity)=>{
            const rowArray = [];
            for(let i = 0; i < rowQuantity; i++){
                rowArray.push(bootstrap.Row(1,['mb-3'],node.node));
            }
            return rowArray;
        })(2);

        return {node,rows}
    })(node);
    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
        })(node);

        const setupGrid = ((grid)=>{
            grid.rows[0].columns[0].node.appendChild(tabBar.node);
        })(grid);

        const cardTitles = [[],['embedding & sharing metrics', 'viewing & traffic meters', 'security metrics', 'content syndication control'],[],[]];

        const cardDecks = ((cardTitles, columnQuantity)=>{
            let decks = [];
            cardTitles.forEach((titleArray)=>{
                let deck = Deck(titleArray,columnQuantity);
                decks.push(deck);
            });
            return decks
        })(cardTitles,3);

        const tabRender = (index, parentNode)=>{
            console.log(`Index ${index} was passed`);
            console.log(cardDecks[index]);
            parentNode.appendChild(cardDecks[index].node)
        };

        const setupTabBar = (()=>{
            let tabButtons = tabBar.buttons;
            tabButtons.forEach((button,index)=>{
               let closure = ()=>{
                   tabRender(index,grid.rows[1].columns[0].node);
               };
               button.addEventListener('click',closure);
            });
        })();

    })();
    return {node};
})();

module.exports = {
    featuresSection:featuresSection
};