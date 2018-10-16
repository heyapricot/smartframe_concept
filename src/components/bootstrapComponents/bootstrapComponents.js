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

    const Card = (titleText) => {
        let node = createComponent('card').node;
        let body = createComponent('card-body',[],node);
        const title = ((titleText, parentNode)=>{
            let titleNode = document.createElement('h5');
            parentNode.appendChild(titleNode);
            ['card-title'].forEach((cssClass)=>{titleNode.classList.toggle(cssClass)});
            titleNode.text = titleText;
            return titleNode;
        })(titleText, body.node);
        return {node,title}
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