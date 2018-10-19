const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');

let footerInfo = {"columns":[
        {"header":"contact",
         "links":[
             {"text":["info@smartframe.io"],"href":"mailto:info@smartframe.io"},
             {"text":["+44 (0) 208 123 8200"],"href":"#"},
             {"text":["Pixelrights Limited", "27-31 Clerkenwell Close", "London", "United Kingdom", "ECIR 0AT"],"href":"#"},
         ]
        },
        {"header":"products",
         "links":[
             {"text":["SF Cloud"], "href":"#"},
             {"text":["SF Tracker"], "href":"#"},
             {"text":["SF Editor"], "href":"#"},
             {"text":["SF Monetizer"], "href":"#"},
         ]
        },
        {"header":"technology",
            "links":[
                {"text":["How it works"], "href":"#"},
                {"text":["Integration"], "href":"#"},
                {"text":["Glossary"], "href":"#"},
                {"text":["Bespoke solutions"], "href":"#"},
            ]
        },
        {"header":"support",
            "links":[
                {"text":["Support contact"], "href":"#"},
            ]
        },
        {"header":"company",
            "links":[
                {"text":["About"], "href":"#"},
                {"text":["Management"], "href":"#"},
                {"text":["Investors"], "href":"#"},
                {"text":["Contact"], "href":"#"},
                {"text":["Partners"], "href":"#"},
            ]
        },
    ]};

const footer = ((info)=>{
    let node = document.createElement('footer');

    let container = ((cssClasses, parentNode)=>{
        let node = document.createElement('div');
        cssClasses.forEach((cssClass)=>{node.classList.toggle(cssClass)});
        parentNode.appendChild(node);
        let row = bootstrap.Row(info.columns.length,[],node);
        let columns = ((columns, cssClasses)=>{
            columns.map((column, index)=>{
                cssClasses.forEach((cssclass)=>{ column.node.classList.toggle(cssclass) });

                let header = ((headerText, cssClasses, parentNode)=>{
                    let holder = ((cssClasses,parentNode)=>{
                        let node = document.createElement('div');
                        cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                        parentNode.appendChild(node);
                        let child = ((headerText, cssClasses, parentNode)=>{
                            let node = document.createElement('h6');
                            cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                            node.textContent = headerText.toUpperCase();
                            parentNode.appendChild(node);
                        })(headerText, ['font-weight-bold'], node);
                        return {child,node}
                    })(cssClasses,parentNode);
                    return {holder}
                })(info.columns[index].header, ['text-primary', 'my-3'], column.node);

                let links = ((links, cssClasses, parentNode)=>{
                    let holder = ((cssClasses, parentNode)=>{
                        let node = document.createElement('div');
                        cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                        parentNode.appendChild(node);
                        let linkNodes = ((links, parentNode)=>{
                            return links.map((link)=>{
                                return link.text.map((text)=>{
                                    let node = document.createElement('h6');
                                    parentNode.appendChild(node);
                                    node.textContent = text;
                                    node.href = link.href;
                                    return {node}
                                });
                            });
                        })(links, node);
                    })(['text-muted'], parentNode);
                    return {holder}
                })(info.columns[index].links, ['text-muted'], column.node);

                return {header, links}
            });
        })(row.columns,['d-flex', 'flex-column']);

        return {columns,node,row}

    })(['container'], node);

    return {container, node}
})(footerInfo);

module.exports = {
    footer:footer
};