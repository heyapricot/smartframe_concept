const {setCss} = require('../helpers/css');
const bootstrapComponents = (()=>{
    const createComponent = (type, cssClasses, parentNode = NaN)=>{
        let node = document.createElement('div');
        setCss(node, [type, ...cssClasses]);
        if(!Number.isNaN(parentNode)){
            parentNode.appendChild(node);
        }
        return {node};
    };
    return {createComponent};
})();

module.exports = {
    bootstrapComponents:bootstrapComponents
};