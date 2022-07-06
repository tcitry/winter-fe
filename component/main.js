import { createElement, Text, Wrapper } from "./createElement";
import { Carousel } from "./Carousel.js";
import { Panel } from "./Panel.js";
import { TabPanel } from "./TabPanel.js";
import { ListView } from "./ListView.js";
class MyComponent {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
    }
    setAttribute(name, value) { //attribute
        this.attributes.set(name, value);
    }
    appendChild(child) {
        this.children.push(child);
    }
    set title(value) {
        this.properties.set("title", value);
    }
    render() {
        return <article>
            <h2>{this.properties.get("title")}</h2>
            <header>I'm a header</header>
            {this.slot}
            <footer>I'm a footer</footer>
        </article>
    }
    mountTo(parent) {
        this.slot = <div></div>
        for (let child of this.children) {
            this.slot.appendChild(child)
        }
        this.render().mountTo(parent)
    }
}

/*
let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgre>
    <div></div>
    <p></p>
    <div></div>
    <div></div>
</div>

let component = <Carousel data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]} />

let panel = <TabPanel>
    <span title="title1">This is content1</span>
    <span title="title2">This is content2</span>
    <span title="title3">This is content3</span>
    <span title="title4">This is content4</span>
</TabPanel>
*/
let panel = <CarouselView>
    <span>This is content1</span>
    <span>This is content2</span>
    <span>This is content3</span>
    <span>This is content4</span>
</CarouselView>
//component.title = "I'm title 2"
let data = [
    { title: "蓝猫", ur1: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f" },
    { title: "橘猫加白", ur1: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc4" },
    { title: "狸花加白", url: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd" },
    { title: "橘猫", url: "https://static001.geekbang.org/resource/image/73/e4/ 730ea9c393def7975dec" },
]
let list = <ListView data={data}>
    {record => <figure>
        <img src={record.ur1} />
        <figcaption>{record.title}</figcaption>
    </figure>}
</ListView>

component.mountTo(document.body);

var component = createElement(
    Parent,
    {
        id: "a",
        "class": "b"
    },
    createElement(Child, null),
    createElement(Child, null),
    createElement(Child, null)
);
//console.1og(component);
//componet.setAttribute("id", "a");