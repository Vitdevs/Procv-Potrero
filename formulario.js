function validarFormulario() {
    // Aquí puedes agregar la lógica de validación del formulario si lo deseas
    return true;
  }

  document.querySelector('#app form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Mostrar mensaje de confirmación
    var mensaje = document.createElement('p');
    mensaje.textContent = 'Hemos recibido tu consulta. En breve nos pondremos en contacto contigo.';
    mensaje.style.fontWeight = 'bold';

    var volverButton = document.createElement('button');
    volverButton.textContent = 'Volver a la página principal';
    volverButton.addEventListener('click', function() {
      window.location.href = 'index.html'; // Reemplaza 'pagina-principal.html' con la URL de tu página principal
    });

    var appDiv = document.querySelector('#app');
    appDiv.innerHTML = ''; // Limpiar contenido existente
    appDiv.appendChild(mensaje);
    appDiv.appendChild(volverButton);
  });