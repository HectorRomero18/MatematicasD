// Selecciona los elementos de la lámpara, interruptores y el sonido
const lamp = document.getElementById("lamp");
const switch1 = document.getElementById("switch1");
const switch2 = document.getElementById("switch2");
const switch3 = document.getElementById("switch3");
const switch4 = document.getElementById("switch4");
const switch5 = document.getElementById("switch5");
const switch6 = document.getElementById("switch6");
const switch7 = document.getElementById("switch7");
const instruccionesBtn = document.getElementById("instruccionesBtn");
const audio = document.getElementById("audio"); // El elemento de audio

// Función para verificar la lógica avanzada de los interruptores
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',   // Estilo para el botón de confirmación
        cancelButton: 'btn btn-danger'     // Estilo para el botón de cancelación
    },
    buttonsStyling: false
});

// Función para verificar la lógica avanzada de los interruptores
function verificarCircuito() {
    // Lógica avanzada para 5 interruptores, con la flexibilidad de encender con menos interruptores
    const estadoLamp = !switch1.checked &&  // A debe estar apagado
                       (switch2.checked || switch3.checked) &&  // B o C deben estar encendidos
                       switch4.checked &&  // D debe estar encendido
                       switch7.checked &&  // G debe estar encendido
                       (switch5.checked || switch6.checked);  // E o F deben estar encendidos

    // Si la lámpara se enciende, cambia su estado
    if (estadoLamp) {
        lamp.classList.remove("apagada");
        lamp.classList.add("encendida");

        // Reproducir el sonido
        audio.play();

        // SweetAlert para mostrar mensaje de lámpara encendida
        Swal.fire({
            icon: 'success',
            title: 'Lámpara encendida',
            text: '¡La configuración es correcta! \nA debe estar apagado, B o C encendidos, D encendido, G encendido, y E o F encendidos.',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) { 
                // Mostrar una segunda alerta con estilo Bootstrap
                return swalWithBootstrapButtons.fire({
                    title: "Excelente!",
                    text: "Sigamos aprendiendo!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }
        }).then((result) => {
            // Solo redirigir si el usuario hizo clic en "OK" en la segunda alerta
            if (result.isConfirmed) {
                // Redirigir a otra página
                window.location.href = "/MatematicasD/PAGINAWEBALGORITMO/index.html";
            }
        });
    } else {
        lamp.classList.remove("encendida");
        lamp.classList.add("apagada");
    }
}


// Mostrar instrucciones con SweetAlert
instruccionesBtn.addEventListener("click", () => {
    Swal.fire({
        icon: 'info',
        title: 'Instrucciones',
        text: 'La lámpara se encenderá solo cuando: \n - Interruptor 1 (A) esté apagado \n - Interruptor 2 (B) o Interruptor 3 (C) estén encendidos \n - Interruptor 4 (D) debe estar encendido \n - Interruptor 5 (E) debe estar encendido \n - Interruptor 6 (F) debe estar apagado \n - Interruptor 7 (G) debe estar encendido',
        confirmButtonText: 'Entendido'
    });
});

// Añadir eventos a los interruptores
switch1.addEventListener("change", verificarCircuito);
switch2.addEventListener("change", verificarCircuito);
switch3.addEventListener("change", verificarCircuito);
switch4.addEventListener("change", verificarCircuito);
switch5.addEventListener("change", verificarCircuito);
switch6.addEventListener("change", verificarCircuito);
switch7.addEventListener("change", verificarCircuito);
