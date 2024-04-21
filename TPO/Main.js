// Definición de la clase Persona
class Persona {
    static id = 1;
    constructor(nombre, apellidos, estadoCivil) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.identificacion = Persona.id++;
      this.estadoCivil = estadoCivil;
    }
  
    // Método para cambiar el estado civil
    cambiarEstadoCivil(nuevoEstadoCivil) {
      this.estadoCivil = nuevoEstadoCivil;
    }
  }
  
  // Definición de la clase Empleado (clase hija de Persona)
  class Empleado extends Persona {
    constructor(nombre, apellidos, estadoCivil, añoIncorporacion, numDespacho) {
      super(nombre, apellidos, estadoCivil);
      this.añoIncorporacion = añoIncorporacion;
      this.numDespacho = numDespacho;
    }
  
    // Método para reasignar el despacho
    reasignarDespacho(nuevoDespacho) {
      this.numDespacho = nuevoDespacho;
    }
  }
  
  // Definición de la clase Estudiante (clse hija de Persona)
  class Estudiante extends Persona {
    constructor(nombre, apellidos, estadoCivil, cursoMatriculado) {
      super(nombre, apellidos, estadoCivil);
      this.cursoMatriculado = cursoMatriculado;
    }
  
    // Método para cambiar de curso
    cambiarCurso(nuevoCurso) {
      this.cursoMatriculado = nuevoCurso;
    }
  }
  
  // Definición de la clase Profesor (Clase hija de Empleado)
  class Profesor extends Empleado {
    constructor(nombre, apellidos, estadoCivil, añoIncorporacion, numDespacho, departamento) {
      super(nombre, apellidos, estadoCivil, añoIncorporacion, numDespacho);
      this.departamento = departamento;
    }
  
    // Método para cambiar de departamento
    cambiarDepartamento(nuevoDepartamento) {
      this.departamento = nuevoDepartamento;
    }
  }
  
  // Definición de la clase PersonalServicio (clase hija de Empleado)
  class PersonalServicio extends Empleado {
    constructor(nombre, apellidos, estadoCivil, añoIncorporacion, numDespacho, seccionAsignada) {
      super(nombre, apellidos, estadoCivil, añoIncorporacion, numDespacho);
      this.seccionAsignada = seccionAsignada;
    }
  
    // Método para cambiar de sección asignada
    cambiarSeccion(seccionNueva) {
      this.seccionAsignada = seccionNueva;
      return seccionNueva;
    }
  }
  
  // Definición de la clase CentroEducativo para la gestión del centro
  class CentroEducativo {
    constructor() {
      this.personas = [];
    }
  
    // Método para dar de alta a una persona
    darDeAlta(persona) {
      this.personas.push(persona);
    }
  
    // Método para dar de baja a una persona
    darDeBaja(identificacion) {
      console.log("Identificación a dar de baja:", identificacion);
      this.personas = this.personas.filter(persona => { 
        console.log("Identificación de la persona en la lista:", persona.identificacion);
        return persona.identificacion != identificacion});
    }
  
    // Método para imprimir la información las personas
    imprimirInformacion() {
      this.personas.forEach(persona => {
        console.log(persona);
      });
    }
  }
  
  // Interacción con el usuario mediante prompts
  const centroEducativo = new CentroEducativo();
  
  while (true) {
    const opcion = prompt("Selecciona una opción:\n1. Dar de alta persona\n2. Dar de baja persona\n3. Imprimir información\n4. Salir");
  
    switch (opcion) {
      case "1":
        const tipoPersona = prompt("Selecciona el tipo de persona (estudiante, profesor, personal de servicio):");
        const nombre = prompt("Nombre:");
        const apellidos = prompt("Apellidos:");
        const estadoCivil = prompt("Estado civil:");
        const añoIncorporacion = prompt("Año de incorporación:");
        let persona;
  
        switch (tipoPersona.toLowerCase()) {
          case "estudiante":
            const cursoMatriculado = prompt("Curso matriculado:");
            persona = new Estudiante(nombre, apellidos, estadoCivil, cursoMatriculado);
            break;
          case "profesor":
            const numDespachoProf = prompt("Número de despacho:");
            const departamento = prompt("Departamento:");
            persona = new Profesor(nombre, apellidos, estadoCivil, añoIncorporacion, numDespachoProf, departamento);
            break;
          case "personal de servicio":
            const numDespachoPersonal = prompt("Número de despacho:");
            const seccionAsignada = prompt("Sección asignada:");
            persona = new PersonalServicio(nombre, apellidos, estadoCivil, añoIncorporacion, numDespachoPersonal, seccionAsignada);
            break;
          default:
            console.log("Tipo de persona no válido.");
            continue;
        }
  
        centroEducativo.darDeAlta(persona);
        break;
      case "2":
        const identificacionBaja = prompt("Introduce la identificación de la persona a dar de baja:");
        centroEducativo.darDeBaja(identificacionBaja);
        break;
      case "3":
        centroEducativo.imprimirInformacion();
        break;
      case "4":
        console.log("Saliendo del programa.");
        break;
      default:
        console.log("Opción no válida.");
    }
  
    if (opcion === "4") {
      break;
    }
  }
