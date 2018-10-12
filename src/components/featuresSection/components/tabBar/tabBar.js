const {bootstrapComponents:bootstrap} = require('../../../bootstrapComponents/bootstrapComponents');
const tabBar = (()=>{
    const node = bootstrap.createComponent('container').node;
    const init = ((mainNode)=>{
        const setupMainNode = ((mainNode)=>{
            mainNode.id = 'tabBar';
        })(mainNode);
    })(node);
    return {node};
})();

module.exports = {
    tabBar:tabBar
};