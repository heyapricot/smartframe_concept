const featuresSection = (()=>{
    const node = document.createElement('section');
    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
        })(node);
    })();
    return {node};
})();

module.exports = {
    featuresSection:featuresSection
};