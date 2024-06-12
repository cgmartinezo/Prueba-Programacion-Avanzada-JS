export class Animal {
  #nombre
  #edad
  #img
  #comentarios
  #sonido
  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre; //tipo de dato string
    this.#edad = edad; //tipo de dato string
    this.#img = img; //tipo de dato string
    this.#comentarios = comentarios; //tipo de dato string
    this.#sonido = sonido; //tipo de dato string
  }
  get nombre() {
    return this.#nombre;
  }
  get edad() {
    return this.#edad;
  }
  get img() {
    return this.#img;
  }
  get comentarios() {
    return this.#comentarios;
  }
  set comentarios(comentarios) {
    this.#comentarios = comentarios;
  }
  get sonido() {
    return this.#sonido;
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  rugir() {
    return this.sonido;
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  aullar() {
    return this.sonido;
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  grunir() {
    return this.sonido;
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  sisear() {
    return this.sonido;
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  chillar() {
    return this.sonido;
  }
}
// export { Aguila, Serpiente, Oso, Lobo, Leon };
