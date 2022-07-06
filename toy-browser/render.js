const images = require("images");

function render(viewport, element) {
    if (element.style) {
        let img = images(element.style.width, element.style.height);
        console.log("image:", element.style.width, element.style.height);

        if (element.style["background-color"]) {
            let color = element.style["background-color"] || "rgb(0,0,0)";
            let match = color.match(/\d+/g);
            img.fill(Number(match[0]), Number(match[1]), Number(match[2]), 1);
            viewport.draw(img, element.style.left || 0, element.style.top || 0);
            console.log("position:", element.style.left, element.style.top);
        }
    }
    if (element.children) {
        for (var child of element.children) {
            render(viewport, child);
        }
    }
}

module.exports = render;
