const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const headSection = ((headerText, subHeaderText, sectionId = 'headSection')=>{
    let node = document.createElement('section');
    node.id = sectionId;
    let container = bootstrap.createComponent('container',[],node);
    let row = bootstrap.createComponent('row',[],container.node);
    let col = bootstrap.createComponent('col',['d-flex', 'flex-column', 'justify-content-center', 'text-center'], row.node);
    let headings = ((headingTypes)=>{
        let headArray = [];
        headingTypes.forEach((headType)=>{
            headArray.push(document.createElement(headType));
        });
        return headArray;
    })(['h1', 'h4']);

    const _init = ((elementArray)=>{
        elementArray.forEach((element)=>{
            col.node.appendChild(element);
        });
    })(headings);

    const render = ()=>{
        return node;
    };

    const setHeading = (headingText, index, headArray = headings) =>{
        headArray[index].textContent = headingText;
    };
    return {render, setHeading};
})();


module.exports = {
    headSection:headSection
};