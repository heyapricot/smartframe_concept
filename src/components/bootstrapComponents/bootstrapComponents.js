const {setCss} = require('../helpers/css');
const bootstrapComponents = (()=>{
    const createComponent = (type, cssClasses = [], parentNode = NaN)=>{
        let node = document.createElement('div');
        setCss(node, [type, ...cssClasses]);
        if(!Number.isNaN(parentNode)){
            parentNode.appendChild(node);
        }
        return {node};
    };

    const Card = (cssClassArray = [], titleText = '', contentText = '', imgSrc = '', linkArray = []) => {
        let node = createComponent('card',cssClassArray).node;
        let body = ((titleText, contentText, imgSrc, parentNode)=>{
            let node = createComponent('card-body',['d-flex','flex-column','justify-content-between','text-center'],parentNode).node;

            let title = ((titleText, parentNode)=>{
                let container = document.createElement('div');
                parentNode.appendChild(container);
                let node = document.createElement('h5');
                container.appendChild(node);
                ['card-title'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
                node.textContent = titleText.replace(/\b\w/g, l => l.toUpperCase());
                return {container,node};
            })(titleText, node);

            let content = ((contentText,parentNode)=>{
                let container = document.createElement('div');
                parentNode.appendChild(container);
                let node = document.createElement('p');
                container.appendChild(node);
                ['card-text'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
                node.textContent = contentText;
                return {container,node};
            })(contentText,node);

            let img = ((imgSrc, parentNode)=>{
                let container = document.createElement('div');
                parentNode.appendChild(container);
                let node = document.createElement('img');
                container.appendChild(node);
                ['img-fluid'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
                node.src = imgSrc;
                return {container,node};
            })(imgSrc,node);

            let bottomLinks = ((linkArray, parentNode)=>{
                let links = linkArray.map((link)=>{
                    let container = document.createElement('div');
                    parentNode.appendChild(container);
                    let node = document.createElement('a');
                    container.appendChild(node);
                    ['card-link'].forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                    node.textContent = link.text;
                    node.href = link.path;
                    return {container,node};
                });
                return {links}
            })(linkArray, node);

            return {content, bottomLinks, img, node, title}
        })(titleText,contentText,imgSrc, node);

        return {node,body}
    };

    const Row = (columnQuantity, cssClassArray = [], parentNode = NaN) => {
        let cssClasses = cssClassArray;
        let node = createComponent('row',cssClasses, parentNode).node;
        let columns = ((columnQuantity, parentNode)=>{
            let columnArray = [];
            for(let i = 0; i < columnQuantity; i++){
                let node = document.createElement('div');
                parentNode.appendChild(node);
                ['col'].forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                columnArray.push({node});
            }
            return columnArray;
        })(columnQuantity, node);

        let addColumns = (quantity)=>{
            for(let i = 0; i < quantity; i++){
                columnArray.push(createComponent('col',[],node));
            }
        };
        return {columns,cssClasses, node}
    };

    return {createComponent, Card, Row};
})();

module.exports = {
    bootstrapComponents:bootstrapComponents
};