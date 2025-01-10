let carrito = [];

        function alternarCarrito() {
            const carritoDesplegable = document.getElementById('carritoDesplegable');
            carritoDesplegable.style.display = carritoDesplegable.style.display === 'block' ? 'none' : 'block';
        }

        function agregarAlCarrito(producto, botonId) {
            const productoEnCarrito = carrito.find(item => item.name === producto.name);

            if (productoEnCarrito) {
                productoEnCarrito.quantity += 1;
            } else {
                producto.quantity = 1;
                carrito.push(producto);
            }

            renderizarCarrito();
            actualizarIconoCarrito();
            resaltarBoton(botonId);
        }

        function renderizarCarrito() {
            const listaCarrito = document.getElementById('listaCarrito');
            listaCarrito.innerHTML = '';

            carrito.forEach((producto, index) => {
                const li = document.createElement('li');
                li.textContent = `${producto.name} - $${producto.price} x `;
                
                const entradaCantidad = document.createElement('input');
                entradaCantidad.type = 'number';
                entradaCantidad.value = producto.quantity;
                entradaCantidad.classList.add('entradaCantidad');
                entradaCantidad.min = 1;
                entradaCantidad.addEventListener('change', (event) => {
                    actualizarCantidad(index, event.target.value);
                });

                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.classList.add('botonEliminar');
                botonEliminar.addEventListener('click', () => {
                    eliminarDelCarrito(index);
                });

                li.appendChild(entradaCantidad);
                li.appendChild(botonEliminar);
                listaCarrito.appendChild(li);
            });
        }

        function actualizarCantidad(index, nuevaCantidad) {
            if (nuevaCantidad >= 1) {
                carrito[index].quantity = nuevaCantidad;
            }
            renderizarCarrito();
        }

        function eliminarDelCarrito(index) {
            carrito.splice(index, 1);
            renderizarCarrito();
            actualizarIconoCarrito();
        }

        function actualizarIconoCarrito() {
            const contadorArticulos = document.getElementById('contadorArticulos');
            contadorArticulos.textContent = carrito.reduce((total, item) => total + item.quantity, 0);
        }

        function resaltarBoton(botonId) {
            const boton = document.getElementById(botonId);
            boton.classList.add('productoAñadido');
            setTimeout(() => boton.classList.remove('productoAñadido'), 500);
        }

        function pagar() {
            if (carrito.length > 0) {
                alert('Gracias por su compra, su pago ha sido exitoso');
                carrito = [];
                renderizarCarrito();
                actualizarIconoCarrito();
            } else {
                alert('El carrito está vacío.');
            }
        }


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

document.querySelectorAll(".product-next__btn").forEach((element) => {
  element.addEventListener("click", () => alert("Próximamente, seguimos trabajando en nuestros productos"));
});
