import { greeting } from "./greeting";
import "./styles.css";
import xdd from "../assets/xdd.png";


const image = document.createElement("img");
image.src = xdd;
document.body.appendChild(image);
console.log(greeting);