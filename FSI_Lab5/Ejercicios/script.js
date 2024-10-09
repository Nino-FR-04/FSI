function calcularReserva() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const fechaEntrada = document.getElementById('fechaEntrada').value;
    const noches = document.getElementById('noches').value;
    const tipoHabitacion = document.getElementById('tipoHabitacion').value;

    // Precios por tipo de habitación
    const precios = {
        'estandar': 50,
        'deluxe': 100,
        'suite': 150
    };

    // Calcular el costo total
    const costoTotal = precios[tipoHabitacion] * noches;

    // Crear el resumen de la reserva
    const resumen = `
        <h2>Resumen de la Reserva</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Fecha de entrada:</strong> ${fechaEntrada}</p>
        <p><strong>Número de noches:</strong> ${noches}</p>
        <p><strong>Tipo de habitación:</strong> ${tipoHabitacion.charAt(0).toUpperCase() + tipoHabitacion.slice(1)}</p>
        <p><strong>Costo total:</strong> $${costoTotal}</p>
    `;

    // Mostrar el resumen en el contenedor
    const resumenReserva = document.getElementById('resumenReserva');
    resumenReserva.innerHTML = resumen; // Añadir el resumen al HTML
    resumenReserva.style.display = 'block'; // Mostrar el contenedor del resumen
}

