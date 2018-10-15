const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const {cardDeck:Deck} = require('./components/cardDeck/cardDeck');
const {tabBar} = require('./components/tabBar/tabBar');
const featuresSection = (()=>{
    const node = document.createElement('section');
    const grid = ((parentNode)=>{
        const node = bootstrap.createComponent('container',[],parentNode);
        const row = bootstrap.createComponent('row',[],node.node);
        const col = bootstrap.createComponent('col',[],row.node);

        return {node,row,col}
    })(node);
    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
        })(node);

        const setupGrid = ((grid)=>{
            grid.col.node.appendChild(tabBar.node);
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

            const tabRender = (index)=>{
                console.log(`Index ${index} was passed`);
                console.log(cardDecks[index]);
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