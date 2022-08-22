let datosMaria = {
  nombre: "Maria Bruno",
  edad: 29,
  telefono: "+54 1130081616",
  mail: "brunomariaok@gmail.com"
};

const listado = [{
    imgUrl: "./img/agile.jpg",
    lenguajes: "Metodologías de Trabajo",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "./img/introAInfo.png",
    lenguajes: "Introducción a Informática",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "./img/frontI.png",
    lenguajes: "Frontend I",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "./img/front2.png",
    lenguajes: "Programación Imperativa",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "./img/baseDeDatos.png",
    lenguajes: "Base de datos",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "./img/agility.jpg",
    lenguajes: "Learning Agility",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "./img/design.png",
    lenguajes: "Design thinking",
    bimestre: "3er bimestre",
  },
  {
    imgUrl: "./img/POO.png",
    lenguajes: "Prog. Orientada a Objetos",
    bimestre: "3er bimestre",
  },
  {
    imgUrl: "./img/testing.png",
    lenguajes: "Testing",
    bimestre: "3er bimestre",
  },
];

const perfilBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const programaBtn = document.querySelector("#obtener-programa");
const cambiarTema = document.querySelector('#cambiar-tema');

perfilBtn.addEventListener("click", renderizarDatosMaria);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarMaterias);
programaBtn.addEventListener("click",renderizarPrograma);
cambiarTema.addEventListener("click", alternarColorTema);




function renderizarDatosMaria() {

    document.getElementById("nombre").innerHTML=`${datosMaria.nombre}`;
    document.getElementById("edad").innerHTML=`${datosMaria.edad}`;
    document.getElementById("telefono").innerHTML=`${datosMaria.telefono}`;
    document.getElementById("mail").innerHTML=`${datosMaria.mail}`;
    perfilBtn.disabled=true;
    perfilBtn.style.backgroundColor= "#287475";
    perfilBtn.style.boxShadow= "none";
  
}

function recorrerListadoYRenderizarMaterias() {
  document.getElementById("fila").innerHTML="";
  listado.forEach(materia => {
    document.getElementById("fila").innerHTML+=`
    <div class="caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
      <p class="lenguajes">${materia.lenguajes}</p>
      <p class="bimestre">${materia.bimestre}</p>
    </div>
    `
  });
}
function renderizarPrograma(){
  document.getElementById("fila").innerHTML="";
  document.getElementById("fila").innerHTML=`
    <img src="./img/plan.jpg" alt="Plan de estudios">
  `

}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  const sitio= document.getElementById("sitio");
  sitio.classList.toggle("dark");


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi= document.getElementById("sobre-mi");

window.addEventListener("keypress", mostrarTextoOculto);
function mostrarTextoOculto(e){
(e.key==="f"|| e.key==="F")? sobreMi.classList.remove("oculto") : ""
}