const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
let contactSection = ((id)=>{
    let node = document.createElement('section');
    node.id = id;
    let container = ((cssClasses, parentNode)=>{
        let node = document.createElement('div');
        cssClasses.forEach((cssClass)=>{node.classList.toggle(cssClass)});
        parentNode.appendChild(node);

        let row = bootstrap.Row(1,[],node);

        let column = ((column, cssClasses, titleText, subtitleText)=>{
            let node = column.node;
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

            })(titleText, subtitleText,['text-light'],node);

            let button = ((buttonText, cssClasses, parentNode)=>{
                let node = document.createElement('button');
                node.type = 'button';
                cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                node.textContent = buttonText.toUpperCase();
                parentNode.appendChild(node);
            })('book a free demo', ['btn', 'btn-light', 'text-primary', 'w-15', 'align-self-center'], node);

            return {button, node, textHolder}

        })(row.columns[0], ['d-flex', 'flex-column', 'justify-content-around', 'text-center'], 'Contact us today', ['to discuss your unique needs', 'with one of our products specialists.']);


        return {column, node, row}

    })(['container'], node);
    return {container, node}
})('contact');

module.exports = {
    contactSection:contactSection
};