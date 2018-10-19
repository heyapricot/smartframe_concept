const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const footer = (()=>{
    let node = (()=>{
        let node = document.createElement('footer');
        return node;
    })();
    let container = ((cssClassArray, parentNode)=>{
        let node = document.createElement('div');
        cssClassArray.forEach((cssClass)=>{node.classList.toggle(cssClass)});
        parentNode.appendChild(node);
        let row = bootstrap.Row(1,[],node);
        let col = ((row, cssClasses, titleText, subtitleText)=>{
            let col = row.columns[0];
            let node = col.node;
            cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
            let textHolder = ((titleText, subtitleText, cssClasses, parentNode)=>{
                let node = document.createElement('div');
                parentNode.appendChild(node);
                cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                let title = ((titleText, parentNode)=>{
                    let node = document.createElement('h1');
                    parentNode.appendChild(node);
                    node.textContent = titleText;
                    return {node};
                })(titleText, node);

                let subtitle = ((subtitleText, parentNode)=>{
                    return subtitleText.map((textChunk)=>{
                        let node = document.createElement('h4');
                        parentNode.appendChild(node);
                        node.textContent = textChunk;
                        return {node};
                    });
                })(subtitleText, node);

                return {node, subtitle, title}

            })(titleText, subtitleText, ['text-light'] ,node);

            let button = ((buttonText, cssClasses, parentNode)=>{
                let node = document.createElement('button');
                node.type = 'button';
                cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                node.textContent = buttonText.toUpperCase();
                parentNode.appendChild(node);
            })('book a free demo', ['btn', 'btn-light', 'text-primary', 'w-15', 'align-self-center'], node);

            return {button,node,textHolder}

        })(row, ['d-flex', 'flex-column', 'justify-content-around', 'text-center'], 'Contact us today', ['to discuss your unique needs', 'with one of our products specialists.']);
        return {node,row}
    })(['container'], node);
    return {node}
})();

module.exports = {
    footer:footer
};