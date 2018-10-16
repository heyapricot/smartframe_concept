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
                rowArray.push(bootstrap.Row(1,[],node.node));
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

        const setupTabBar = ((cardTitles)=>{
            let tabButtons = tabBar.buttons;

            const cardDecks = ((cardTitles)=>{
                let decks = [];
                cardTitles.forEach((titleArray)=>{
                    let deck = Deck(titleArray);
                    decks.push(deck);
                });
                return decks
            })(cardTitles);

            const tabRender = (index, parentNode)=>{
                console.log(`Index ${index} was passed`);
                console.log(cardDecks[index]);
                parentNode.appendChild(cardDecks[index].node)
            };

            tabButtons.forEach((button,index)=>{
               let closure = ()=>{
                   tabRender(index);
               };
               button.addEventListener('click',closure);
            });

        })(cardTitles);
    })();
    return {node};
})();

module.exports = {
    featuresSection:featuresSection
};