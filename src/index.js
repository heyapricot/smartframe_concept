const {navbar} = require('../src/components/navbar/navbar');
const {headSection} = require('../src/components/headSection/headSection');
document.body.appendChild(navbar.render());
let head = "It's all about your Audience";
let subHead = "Learn more about the SmartFrame Product Portfolio's features...";
headSection.setHeading(head, 0);
headSection.setHeading(subHead, 1);
document.body.appendChild(headSection.render());
