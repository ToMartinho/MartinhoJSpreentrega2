/* ----------------------------------------------------  CLASES  --------------------------------------------------*/

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
/* ----------------------------------------------------  FIN CLASES  -----------------------------------------------*/ 



/* ----------------------------------------------------  FUNCIONES  ------------------------------------------------*/  
// se crea funcion para verificar que no exista ya una resesrva para ese dia y horario
function verificarReserva(reservas,dia,horario){
    // se buscan el dia y el horario
    reservas.forEach((reserva)=>{
        if((reserva.dia == dia) && (reserva.horario == horario)){
            // si el horario ya se encuentra reservado
            alert("el horario ya se encuentra reservado");
            return disponible = false;            
        }          
    })
    if(disponible == true){
        alert("la reserva se a verificado y realizado correctamente");
        return disponible = true;
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
/* ----------------------------------------------------  FIN FUNCIONES  -----------------------------------------------*/  

/* -----------------------------------------------------  MAIN  -------------------------------------------------------*/ 

/* -------------  VARIABLES  -----------*/  

const reservas = [];
let continuar = true;
let disponible = true;

/* ------------  FIN VARIABLES  ---------*/  

// el usuario realiza la reserva
while(continuar){
    const nombre = prompt("Ingrese su nombre").toUpperCase();
    const apellido = prompt("Ingrese su Apellido").toUpperCase();    
    const dni = parseInt(prompt("Ingrese su DNI"));
    const dia = prompt("seleccione un dia entre lunes a domingo para su reserva");
    const horario = parseInt(prompt("un horario entre las 10hs hasta las 23hs para su reserva"));
    verificarReserva(reservas,dia,horario);
    if(reservas.length == 0){
       reservas.push(new Reserva(nombre,apellido,dni,dia,horario));
       alert("dia y horario reservado correctamente");
    }else if(disponible == true){
        verificarReserva(reservas,dia,horario);
        console.log(disponible);        
        reservas.push(new Reserva(nombre,apellido,dni,dia,horario));      
    }else if(disponible == false){ 
        alert("a continuacion cargue nuevamente el horario y el dia");
        const dia = prompt("seleccione un dia entre lunes a domingo para su reserva");
        const horario = parseInt(prompt("un horario entre las 10hs hasta las 23hs para su reserva"));
        alert("luego de la verificacion y cambio de horario y dia reserva realizada de manera exitosa");
        disponible = confirm("desea confirmar el dia y horario ingresado")
        reservas.push(new Reserva(nombre,apellido,dni,dia,horario));
        
    }
    console.log(reservas);
    continuar = confirm("Quiere realizar otra reserva?");
}    
       

    

// se le pregunta al usuario si quere eliminar una reserva
continuar = confirm("Quiere cancelar alguna reserva ? ");
while(continuar){
    const reservaAeliminar = parseInt(prompt("ingrese dni con el que realizo su reserva"));
    cancelarReserva(reservaAeliminar);
    continuar = confirm("Quiere cancelar alguna otra reserva?");
}



/* ----------------------------------------------------  FIN MAIN  ----------------------------------------------------*/  