import React from "react";
import ReactDOM from "react-dom";
import Slider from "./component/slider";
import SliderItem from "./component/sliderItem";
import "./index.css"
// 在react中，.js或者.json可以省略；如果是同级路径./是不可以省略的
// webpack打包的图片路径不支持相对路径，支持相对路径(打包之后路径会发生改变，所以需要使用require)
let images=[require("./img/images/1.jpg"),require("./img/images/2.jpg"),require("./img/images/3.jpg"),require("./img/images/1.jpg")]
ReactDOM.render( <Slider imgs={images}/>,document.querySelector("#root"));