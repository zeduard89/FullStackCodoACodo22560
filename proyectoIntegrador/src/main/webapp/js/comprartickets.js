// Defino valor de ticket
const valorTicket = 200;




// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");



// Función para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

//Ejecuto verificaciones
function control1() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

	
}




//Ejecuto verificaciones
function confirmar() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }
	
	
	alert("Gracias por su compra");
	window.open(location.href='comprar-tickets.html',ventana1)
	
}






//REALIZO LA FUNCION EN LA PRIMER PAGINA 


function costo() {

   // Multiplico cantidad de tickets por el valor
    
    let totalValorTickets = (cantidadTickets.value) * valorTicket;
   
   	if (cantidadTickets.value === '' ) {
       cantidadTickets.value = 0 ;   
    }
   	
   	if (categoria.value === 'SinDescuento' ) {
        totalValorTickets = totalValorTickets ;
        
    }
   
    
    if (categoria.value === 'Estudiante') {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
        
        
    }
    if (categoria.value === 'Trainee') {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
       
        
    }
    if (categoria.value === 'Junior') {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
       
    }
    
    

    // Inserto el valor en el HTML
    totalPago.innerHTML = "Total a pagar: $ " + totalValorTickets;
}


function costo2() {

   // Multiplico cantidad de tickets por el valor
    
    let totalValorTickets = (cantidadTickets.value) * valorTicket;
   
   	 
    
   	
   	if (categoria.value === 'SinDescuento' ) {
        totalValorTickets = totalValorTickets ;
        
    }
   
    
    if (categoria.value === 'Estudiante') {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
        
        
    }
    if (categoria.value === 'Trainee') {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
       
        
    }
    if (categoria.value === 'Junior') {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
       
    }
    
    

    // Inserto el valor en el HTML
    totalPago.innerHTML = "Total a pagar: $ " + totalValorTickets;
    
    
}




//---------------------------------------------------------------------------



//Mostrar costo	SELECT
cantidadTickets.addEventListener('change', costo2);

	
//Mostrar costo	SELECT
categoriaSelect.addEventListener('change', costo);



// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', control1);

//boton Borrar
btnBorrar.addEventListener('click', reset_total_a_pagar);


// Función para el botón Borrar para que borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    document.getElementById("form").reset();
    totalPago.innerHTML = "";
}



//---------------------------------------------------------------------------------





