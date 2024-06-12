import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from "./modulos.js"
// creacion de variables
const seleccionDiv = document.querySelector("#preview")
const seleccionAnimal = document.querySelector("#animal")
const insertarAnimal = document.querySelector("#Animales")
const formulario = document.querySelector("#formulario")
const seleccionEdad = document.querySelector("#edad")
// 
let dataAnimales = []
const url = "animales.json"
const getPost = async () => {
  const response = await fetch(url)
  const data = await response.json()
  dataAnimales = data.animales
}
//IFE
(async () => {
  await getPost(); // Esperar a que getPost() se complete

  let seleccionTextoNombre = ""
  let seleccionTextoNombreValidar = ""
  let imagenSeleccion = ""
  let seleccionTextoEdad = ""
  let sonidoSeleccion = ""

  const buscarAnimal = (nombre) => {
    return dataAnimales.find(animal => animal.name === nombre)
  }

  //seleccion del nombre del animal
  seleccionAnimal.addEventListener("change", () => {

    const seleccionIndiceNombre = seleccionAnimal.selectedIndex
    seleccionTextoNombre = seleccionAnimal.options[seleccionIndiceNombre].value
    seleccionTextoNombreValidar = seleccionAnimal.options[seleccionIndiceNombre].text
    imagenSeleccion = ""
    sonidoSeleccion = ""

    const animalSeleccionado = buscarAnimal(seleccionTextoNombre)

    if (animalSeleccionado) {
      seleccionDiv.style.backgroundImage = `url(assets/imgs/${animalSeleccionado.imagen})`
      imagenSeleccion = `assets/imgs/${animalSeleccionado.imagen}`
      sonidoSeleccion = `assets/sounds/${animalSeleccionado.sonido}`
    }

  })
  // seleccion de la edad del animal

  seleccionEdad.addEventListener("change", () => {
    const seleccionIndiceEdad = seleccionEdad.selectedIndex
    seleccionTextoEdad = seleccionEdad.options[seleccionIndiceEdad].text
  })
  //validaciones

  // function validacion()= {

  // }


  // insertar el animal seleccionado en el DOM al presionar el boton
  const comentarios = document.querySelector("#comentarios")
  let animales = []
  formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const comenta = comentarios.value

    if (seleccionTextoNombreValidar === "") {
      alert("Selecciona un Animal")
      return
    }
    if (seleccionTextoEdad === "") {
      alert("Selecciona un rango de edad")
      return
    }

    if (comenta.trim() === "") {
      alert("Ingresa el comentario")
      return
    }

    const animalInsert = new Animal(seleccionTextoNombre, seleccionTextoEdad, imagenSeleccion, comenta, sonidoSeleccion)
    animales.push(animalInsert)
    console.log(animales[animales.length - 1].sonido)
    insertarAnimal.innerHTML += `
                <div class="card mx-2" style="width: 12rem;">
                <button type="button" class="" data-bs-toggle="modal" data-bs-target="#modal${animales.length - 1}">
                  <img src="${imagenSeleccion}" class="card-img-top" alt="..."></button>
                  <button  id="btnAudio${animales.length - 1}" onclick="playSonido('${animales[animales.length - 1].sonido}')"><div class="card-body">
                  <p class="card-text"><i class="fa-solid fa-volume-high"></i></p>
                  
                  </div></button>
              </div>
              <div class="modal fade" id="modal${animales.length - 1}">
                <div class="modal-dialog modal-dialog-centered w-25" role="document">
                  <div class="modal-content bg-dark">
                    <div class="modal-body text-white">
                      <img src="${animales[animales.length - 1].img}" width="100%" alt="${animales[animales.length - 1].nombre}">
                      <hr>
                      <p>${animales[animales.length - 1].edad}</p>
                      <p>Comentarios :</p>
                      <P>${animales[animales.length - 1].comentarios}</P>
                    </div>
                  </div>
                </div>
              </div>
              `
    formulario.reset()
  })
})();

function playSonido(urlSonido) {

  const audio = document.getElementById(`player`);
  audio.src = urlSonido
  audio.play()
}
window.playSonido = playSonido;

