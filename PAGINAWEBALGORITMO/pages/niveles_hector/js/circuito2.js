// Selecciona los elementos de la lámpara, interruptores y el sonido
const lamp = document.getElementById("lamp");
const switch1 = document.getElementById("switch1");
const switch2 = document.getElementById("switch2");
const switch3 = document.getElementById("switch3");
const switch4 = document.getElementById("switch4");
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
    // Lógica avanzada: A && B && !C
    const estadoLamp = switch1.checked && switch2.checked && !switch3.checked && switch4.checked;

    // Cambia el estado de la lámpara
    if (estadoLamp) {
        lamp.classList.remove("apagada");
        lamp.classList.add("encendida");

        // Reproducir el sonido
        audio.play();

        // SweetAlert para mostrar mensaje de lámpara encendida
        Swal.fire({
            icon: 'success',
            title: 'Lámpara encendida',
            text: 'La configuración es correcta: A y B y D encendidos, C apagado.',
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
                window.location.href = "/MatematicasD/PAGINAWEBALGORITMO/pages/niveles_hector/circuito3.html";
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
        text: 'La lámpara se encenderá solo cuando: \n - Interruptor 1 (A) y 2 (B) estén encendidos \n - Interruptor 3 (C) esté apagado \n Interruptor (D) este encendido.',
        confirmButtonText: 'Entendido'
    });
});

// Añadir eventos a los interruptores
switch1.addEventListener("change", verificarCircuito);
switch2.addEventListener("change", verificarCircuito);
switch3.addEventListener("change", verificarCircuito);
switch4.addEventListener("change", verificarCircuito);