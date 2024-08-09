document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Flatpickr en el campo de fecha
    flatpickr("#fecha", {
        dateFormat: "Y-m-d",
        minDate: "today",
    });
});

function verificarDisponibilidad() {
    const fecha = document.getElementById('fecha').value;
    const resultadoDisponibilidad = document.getElementById('resultadoDisponibilidad');
    const reservarBtn = document.getElementById('reservarBtn');
    
    if (fecha) {
        // Simular la verificación de disponibilidad
        const disponibilidad = true; // Simulación de disponibilidad
        
        if (disponibilidad) {
            resultadoDisponibilidad.innerText = `La disponibilidad para el ${fecha} es alta. Puede proceder con la reserva.`;
            reservarBtn.style.display = 'inline-block'; // Mostrar el botón de reservar
        } else {
            resultadoDisponibilidad.innerText = `Lo siento, el ${fecha} no está disponible.`;
            reservarBtn.style.display = 'none'; // Ocultar el botón de reservar si no está disponible
        }
    } else {
        alert('Por favor, seleccione una fecha.');
    }
}

function simularReservacion() {
    const fecha = document.getElementById('fecha').value;
    
    if (fecha) {
        alert(`Su reservación para el ${fecha} ha sido confirmada.`);
    } else {
        alert('Por favor, seleccione una fecha válida.');
    }
}
