import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  const logoACJ = document.querySelector("#imgLogoACJ");
  const bgHero = document.querySelector("main");
  const myBtn = document.querySelectorAll(".my-btn");
  const tech = document.querySelectorAll(".tech");
  const figure = document.querySelectorAll("figure");
  const desc = document.querySelectorAll(".desc");

  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
    logoACJ.style.filter = "invert(0)";
    bgHero.style.backgroundImage = "url('/bg-hero-gray.png')";
    bgHero.style.boxShadow = "black 0 0 20px";
    myBtn.forEach((boton) => {
      boton.style.backgroundColor = "#88f325";
      boton.style.color = "black";
      boton.style.border = "1px solid black";
      boton.addEventListener("mouseenter", () => {
        boton.style.boxShadow = "whitesmoke 0 0 10px";
      });
      boton.addEventListener("mouseleave", () => {
        boton.style.boxShadow = "";
      });
    tech.forEach((nombre) => {
      nombre.style.color = "whitesmoke";
    });
    desc.forEach((descripcion) => {
      descripcion.style.color = "black";
    });
    figure.forEach((figura) => {
      figura.style.boxShadow = "0 0 10px black";
    });
    });
  } else {
    themeBtn.innerText = "☀";
    logoACJ.style.filter = "invert(1)";
    bgHero.style.backgroundImage = "url('/bg-hero-black.png')";
    bgHero.style.boxShadow = "whitesmoke 0 0 20px";
    myBtn.forEach((boton) => {
      boton.style.backgroundColor = "black";
      boton.style.color = "whitesmoke";
      boton.style.border = "1px solid whitesmoke";
    });
    tech.forEach((nombre) => {
      nombre.style.color = "black";
    });
    desc.forEach((descripcion) => {
      descripcion.style.color = "whitesmoke";
    });

    figure.forEach((figura) => {
      figura.style.boxShadow = "0 0 10px whitesmoke";
    });
  }
};

export const Navbar = () => `
<nav>
<div id="logoACJ">
  <img src="/logo_arteConJota.png" alt="logo_arteConJota" id= "imgLogoACJ">
</div>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Proyectos</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
`;