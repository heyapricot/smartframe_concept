const setCss = (node, cssClassArray)=>{
    cssClassArray.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
    return node
};

module.exports = {
    setCss:setCss
};