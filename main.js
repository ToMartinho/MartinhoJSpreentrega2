// se crea la clase de RESERVA
class Reserva{
    constructor(nombre,apelliodo,dni,dia,horario){
        this.nombre = nombre;
        this.apelliodo = apelliodo;
        this.dni = dni;
        this.dia = dia;
        this.horario = horario;
    }
}

// el usuario realiza la reserva
const reservas = [];
let continuar = true;
while(continuar){
    const nombre = prompt("Ingrese su nombre").toUpperCase();
    const apellido = prompt("Ingrese su Apellido").toUpperCase();    
    const dni = parseInt(prompt("Ingrese su DNI"));
    const dia = prompt("seleccione un dia entre lunes a domingo para su reserva");
    const horario = parseInt(prompt("un horario entre las 10hs hasta las 23hs para su reserva"));
    // verificarReserva(dia,horario);   
    reservas.push(new Reserva(nombre,apellido,dni,dia,horario));
    continuar = confirm("Quiere realizar otra reserva?");

}
console.log(reservas);
// se crea funcion para verificar que no exista ya una resesrva para ese dia y horario
const verificarReserva=(dia,horario)=>{
    // se buscan del dia y el horario
    const indexDia = reservas.findIndex((reserva)=> reserva.dia == dia);
    const indexHorario = reservas.findIndex((reserva)=> reserva.horario == horario);
    if(indexDia && indexHorario != -1){
        // si el horario ya se encuentra reservado
        alert("la fecha o el horario ya se encuentran reservados por alguien mas");
        const dia = prompt("a continuacion seleccione nuevamente el dia");
        const horario = parseInt(prompt("seleccione un nuevo horario para su reserva"));
        return dia,horario; 
    }else{
        alert("su reserva se a realizado exitosamente");
    }
}

// se crea funcion para cancelar la reserva
const cancelarReserva=(dni)=>{
    const index = reservas.findIndex((reserva)=> reserva.dni == dni);
    if(index != -1){
        reservas.splice(index,1);
        alert("su reserva a sido cancelada exitosamente");
    }else{
        alert("el dni ingresado no posee ninguna reserva");
    }
}
console.log(reservas);
// se le pregunta al usuario si quere eliminar una reserva
continuar = confirm("Quiere cancelar alguna reserva ? ");
while(continuar){
    const reservaAeliminar = parseInt(prompt("ingrese dni con el que realizo su reserva"));
    cancelarReserva(reservaAeliminar);
    continuar = confirm("Quiere cancelar alguna otra reserva?");
}
console.log(reservas);