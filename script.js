document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    alert('¡Mensaje enviado exitosamente!'); // Mostrar mensaje de confirmación
});