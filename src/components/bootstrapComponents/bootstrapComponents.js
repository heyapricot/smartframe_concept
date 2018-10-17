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

    const Card = (cssClassArray = [], titleText = '', contentText = '', imgSrc = '') => {
        let node = createComponent('card',cssClassArray).node;
        let body = {
            "node": createComponent('card-body',[],node).node,
        };

        body.title = ((titleText, parentNode)=>{
            let titleNode = document.createElement('h5');
            parentNode.appendChild(titleNode);
            ['card-title'].forEach((cssClass)=>{titleNode.classList.toggle(cssClass)});
            titleNode.textContent = titleText;
            return titleNode;
        })(titleText, body.node);
        body.content = ((contentText,parentNode)=>{
            let node = document.createElement('p');
            parentNode.appendChild(node);
            ['card-text'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
            node.textContent = contentText;
            return node;
        })(contentText,body.node);
        body.img = ((imgSrc, parentNode)=>{
            let node = document.createElement('img');
            parentNode.appendChild(node);
            ['img-fluid'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
            node.src = imgSrc;
            return node;
        })(imgSrc,body.node);

        return {node,body}
    };

    const Row = (columnQuantity, cssClassArray = [], parentNode = NaN) => {
        let cssClasses = cssClassArray;
        let node = createComponent('row',cssClasses, parentNode).node;
        let columns = ((columnQuantity)=>{
            let columnArray = [];
            for(let i = 0; i < columnQuantity; i++){
                columnArray.push(createComponent('col',[],node));
            }
            return columnArray;
        })(1);
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