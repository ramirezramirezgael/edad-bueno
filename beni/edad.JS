var alumno = {
    nombre: null,
    apellidos: null,
    fecha_nacimiento: null,
    fecha_actual:2023,
    saluda(){
        return "Hola mi nombre es: "+ this.nombre +" "+ this.apellidos + " mucho gusto";
    },
    edad(){
       return  "tu edad es"+ this.años
    }
}

function saveStudent() {
    alumno.nombre = document.getElementById('name').value;
    alumno.apellidos = document.getElementById('lastname').value;
    alumno.fecha_actual = document.getElementById('year').value;
}

function saludar() {
   alert(alumno.saluda().edad());
   alert(alumno.edad());
}
años= this.fecha_actual-fecha_nacimiento;