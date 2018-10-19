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
                    let node = document.createElement('h6');
                    node.textContent = headerText.toUpperCase();
                    cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                    parentNode.appendChild(node);
                })(info.columns[index].header, ['text-primary'], column.node);
                return {header}
            });
        })(row.columns,['text-center']);

        return {columns,node,row}

    })(['container'], node);

    return {container, node}
})(footerInfo);

module.exports = {
    footer:footer
};