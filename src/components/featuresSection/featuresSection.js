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
            {"title":"amazon web service SmartFrame hosting","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/aws.jpg", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"content delivery network","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/cdn.jpg", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"SmartFrame admin panel","content":"The Panel is the heart of SmartFrame. Add, replace or remove images, update metadata, adjust your display profiles and configure your search engine and social media settings all in one place.", "imageLink":"images/admin_panel.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"API access","content":"Add, remove or update your SmartFrame images using our API tools.", "imageLink":"images/api.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"pixel perfect images & retina screen support","content":"SmartFrame tecjnology automatically detects the size and resolution capabilty of the viewers device and serves the most appropriate image accordingly.", "imageLink":"images/pixel_perfect.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"dynamic image resizing","content":"As browser windows are resized SmartFrame automatically recalculates and displays the most appropriate version of the image, ensuring the results are pixel perfect everytime.", "imageLink":"images/resize.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
        ]},
        {"cards":[
            {"title":"embedding & sharing metrics","content":"SmartFrame's Embedding and Sharing Metrics let you see where your images are being displayed around the web and on social networks.", "imageLink":"images/embed.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"viewing & traffic meters","content":"Viewing and Traffic Metrics let you find your most popular and engaging images, and see which are delivering the most traffic and from which sources.", "imageLink":"images/tracking.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"security metrics","content":"Our Security Metrics will let you know how and where people are trying to download or steal your images.", "imageLink":"images/security.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"content syndication control","content":"Syndicate with confidence, safe in the knowledge that you can withdraw or replace SmartFrame images at any time. You can even block or greenlight specific countries, websites and IP adresses.", "imageLink":"images/syndication.png", "bottomLink": [{"text":"Get it now", "path": "#"}]}
        ]},
        {"cards":[
            {"title":"customisable interactive overlay themes","content":"Choose from a selection of highly customizable overlay themes to mode closely match the look and feel of your site, brand or marketplace demographics.", "imageLink":"images/themes.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"social network sharing options","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/sharing.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"full screen views","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/fullscreen.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"image zoom","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/zoom.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"live image views","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/live1.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"live image views","content":"Our Content Delivery Network (CDN) delivers SmartFrame images to viewer at high speed and with low latency.", "imageLink":"images/live2.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
        ]},
        {"cards":[
            {"title":"direct link to website or product page","content":"Create a direct link from your SmartFrame - wherever it sits - straight to your website or to a specific product page for one-click purchase.", "imageLink":"images/product_page.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"access e-Marketing data","content":"Find out who has been sharing your SmartFrames and which of their images they have been sharing with access to collated 'opted-in' email addresses.", "imageLink":"images/e-marketing.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"in-Image advertising","content":"Create your own targeted advertising campaigns and update them dynamically and retrospectively wherever your content is featured.", "imageLink":"images/advertising.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"image sponsorship placement","content":"Create a direct link from your SmartFrame - wherever it sits - straight to your website or to a specific product page for one-click purchase.", "imageLink":"images/sponsorship.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"prompts & scarcity alerts","content":"Trigger timed and relevant prompts or alerts to drive your audience towards your desired outcomes or specific actions.", "imageLink":"images/scarcity.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
            {"title":"linkable hotspots","content":"Highlight specific elements within your images, tag and link them directly to expanded content, web pages, videos or e-commerce stores.", "imageLink":"images/hotspots.png", "bottomLink": [{"text":"Get it now", "path": "#"}]},
        ]},
    ]};

    const sections = ((cardContent)=>{
        return cardContent.sections.map((section,index)=>{
            let textStyles = ['text-primary', 'text-success', 'text-danger', 'text-warning'];
            let cssClasses = ['border-0', textStyles[index]];
            let cards = section.cards.map((cardContent)=>{
                let card = ((cssClassArray)=>{
                    let bootstrapCard = bootstrap.Card(cssClassArray,cardContent.title,cardContent.content, cardContent.imageLink, cardContent.bottomLink);
                    let icon = ((cssClassArray)=>{
                        let node = document.createElement('i');
                        cssClassArray.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                        return node;
                    })(['fas', 'fa-check-circle']);
                    bootstrapCard.body.node.insertBefore(icon,bootstrapCard.body.title.container);
                    bootstrapCard.body.bottomLinks.links.forEach((linkObj)=>{linkObj.node.classList.toggle(cssClassArray[1])});
                    bootstrapCard.body.content.node.classList.toggle('text-muted');
                    return bootstrapCard
                })(cssClasses);
                return card
            });
            return {cards}
        });
    })(cardContent);

    const cardDecks = ((sections, columnQuantity)=>{
        let decks = [];
        sections.forEach((section)=>{
            let deck = Deck(section.cards,columnQuantity);
            decks.push(deck);
        });
        return decks
    })(sections,3);

    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
        })(node);

        const setupGrid = ((grid)=>{
            grid.rows[0].columns[0].node.appendChild(tabBar.node);
        })(grid);

        const tabRender = (index, parentNode, currentDeckNode)=>{
            let newDeckNode = cardDecks[index].node;
            parentNode.replaceChild(newDeckNode,currentDeckNode);
            return newDeckNode;
        };

        const setupTabBar = (()=>{
            let tabButtons = tabBar.buttons;
            let currentDeckNode = cardDecks[0].node;
            grid.rows[1].columns[0].node.appendChild(currentDeckNode);
            tabButtons.forEach((button,index)=>{
               let closure = ()=>{
                   currentDeckNode = tabRender(index,grid.rows[1].columns[0].node, currentDeckNode);
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
