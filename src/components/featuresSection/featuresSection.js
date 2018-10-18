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

    let cardContent = {"sections":[
        {"cards":[

        ]},
        {"cards":[
            {"title":"embedding & sharing metrics","content":"SmartFrame's Embedding and Sharing Metrics let you see where your images are being displayed around the web and on social networks.", "imageLink":"../images/embed.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"viewing & traffic meters","content":"Viewing and Traffic Metrics let you find your most popular and engaging images, and see which are delivering the most traffic and from which sources.", "imageLink":"../images/tracking.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"security metrics","content":"Our Security Metrics will let you know how and where people are trying to download or steal your images.", "imageLink":"../images/security.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"content syndication control","content":"Syndicate with confidence, safe in the knowledge that you can withdraw or replace SmartFrame images at any time. You can even block or greenlight specific countries, websites and IP adresses.", "imageLink":"../images/syndication.png", "bottomLink": [{"text":"Get it now", "path": "#"}]}
        ]}
    ]};

    const cards = ((cardContent)=>{
        let mainObject = {"sections":[]};
        cardContent.sections.forEach((section)=>{
            let cardsHolder = {"cards":[]};
            section.cards.forEach((card)=>{ cardsHolder.cards.push(bootstrap.Card(['border-0'],card.title,card.content, card.imageLink, card.bottomLink)) });
            mainObject.sections.push(cardsHolder);
        });
        return mainObject;
    })(cardContent);

    const cardDecks = ((sections, columnQuantity)=>{
        let decks = [];
        sections.forEach((section)=>{
            let deck = Deck(section.cards,columnQuantity);
            decks.push(deck);
        });
        return decks
    })(cards.sections,3);

    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
        })(node);

        const setupGrid = ((grid)=>{
            grid.rows[0].columns[0].node.appendChild(tabBar.node);
        })(grid);

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
