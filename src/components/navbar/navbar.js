const {setCss} = require('../helpers/css');
const navbar = (()=>{
    const _initContainer = ()=>{
        let navContainer = document.createElement('div');
        navContainer.classList.toggle('container');
        return navContainer;
    };
    const _initNav = ()=>{
        let nav = document.createElement('nav');
        setCss(nav, ["navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-center"]);
        let containers = ((size, parentNode)=>{
            let containerArray = [];
            for(let i = 0; i < size; i++){
                let container = document.createElement('div');
                setCss(container, ['mx-2']);
                containerArray.push(container);
                parentNode.appendChild(container);
            }
            return containerArray;
        })(3, nav);
        let logoContainer = containers[0];
        let linkContainer = containers[1];
        let buttonContainer = containers[2];
        const logo = ((parentNode)=>{
            let hyperlink = document.createElement('a');
            setCss(hyperlink, ['navbar-brand']);
            hyperlink.href = '#';
            let logo = ((width, height, source)=>{
                let image = new Image(width,height);
                image.src = source;
                return image;
            })(272, 29, '../images/smartframe_logo.jpg');
            hyperlink.appendChild(logo);
            parentNode.appendChild(hyperlink);
        })(logoContainer);
        const links = ((linkTextArray, parentNode) => {
            let unorderedList = document.createElement('ul');
            setCss(unorderedList,["navbar-nav"]);
            let listElementArray = [];
            linkTextArray.forEach((linkText) => {
                let listElement = document.createElement('li');
                setCss(listElement, ["nav-item"]);
                listElementArray.push(listElement);
                let hyperlink = document.createElement('a');
                hyperlink.href = '#';
                setCss(hyperlink, ["nav-link"]);
                hyperlink.textContent = linkText;
                listElement.appendChild(hyperlink);
                unorderedList.appendChild(listElement);
                return listElementArray;
            });
            parentNode.appendChild(unorderedList);
        })(["Home", "Products", "Applications", "Features", "Technology", "Company"],linkContainer);

        const buttons = ((buttonTextArray, parentNode)=>{
            let buttonClasses = ["btn-primary", "btn-outline-primary"];
            for(let i = 0; i < buttonTextArray.length; i++){
                let button = document.createElement('button');
                setCss(button, ['btn', buttonClasses[i % buttonClasses.length], 'mx-2']);
                button.textContent = buttonTextArray[i];
                parentNode.appendChild(button);
            }
        })(["Request Demo", "Login"], buttonContainer);

        return nav;
    };
    const render = ()=>{
        let container = _initContainer();
        container.appendChild(_initNav());
        return container;
    };
    return {render};
})();

module.exports = {
    navbar:navbar
};