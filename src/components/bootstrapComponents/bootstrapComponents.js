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
        let body = ((titleText, contentText, imgSrc, parentNode)=>{
            let node = createComponent('card-body',[],parentNode).node;

            let title = ((titleText, parentNode)=>{
                let node = document.createElement('h5');
                parentNode.appendChild(node);
                ['card-title'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
                node.textContent = titleText;
                return node;
            })(titleText, node);

            let content = ((contentText,parentNode)=>{
                let node = document.createElement('p');
                parentNode.appendChild(node);
                ['card-text'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
                node.textContent = contentText;
                return node;
            })(contentText,node);

            let img = ((imgSrc, parentNode)=>{
                let node = document.createElement('img');
                parentNode.appendChild(node);
                ['img-fluid'].forEach((cssClass)=>{node.classList.toggle(cssClass)});
                node.src = imgSrc;
                return node;
            })(imgSrc,node);

            return {content, img, node, title}
        })(titleText,contentText,imgSrc, node);

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