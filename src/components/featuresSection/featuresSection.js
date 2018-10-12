const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const {tabBar} = require('./components/tabBar/tabBar');
const featuresSection = (()=>{
    const node = document.createElement('section');
    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
            const setupGrid = ((parentNode)=>{
                const container = bootstrap.createComponent('container',[],parentNode);
                const row = bootstrap.createComponent('row',[],container.node);
                const col = bootstrap.createComponent('col',[],row.node);
            })(node);
        })(node);
    })();
    return {node};
})();

module.exports = {
    featuresSection:featuresSection
};