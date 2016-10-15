
function persona(nombre, apellido, edad, iris) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.iris = iris;
    this.idioma = "spanish";
}


var estudiante = new persona("edinson","aguirre",100,"negro")


console.log(estudiante.nombre);
