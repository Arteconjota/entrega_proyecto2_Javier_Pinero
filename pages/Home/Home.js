import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <img src= "/name-hero.png" alt= "nameDeveloper" id= "name-hero">
    <h1>Software Developer | Full Stack | Designer | Photographer</h1>
    <p>
    Loving to creat websites, unleashing my imagination, and building sites where people
    can enjoy both visually and functionally.<br>
    I studied graphic design a few years ago, which has helped me develop a keen eye for aesthetics
    and functionality.<br>
    I'm also a photographer, so if you ever need a hybrid, feel free to reach out!<br>
    Madrid, Spain.</p>
    <a href="mailto:arteconjota@gmail.com">Let's talk!</a>
    </section>`;
};