// Función para desbloquear las opciones
function unlockOption(optionId, button) {
    const option = document.getElementById(optionId); // Seleccionamos el nodo correspondiente
    const details = option.querySelector('.details');

    // Hacer visible el nodo
    option.classList.remove('hidden');

    // Desactivar el botón y cambiar su color a gris
    button.disabled = true;
    button.style.backgroundColor = "#ccc";  // Cambiar color del botón a gris
    button.style.cursor = "not-allowed";   // Cambiar el cursor a "no permitido"
    
    // Mostrar los detalles del nodo
    details.style.display = 'block'; // Asegurarnos de que los detalles sean visibles
    
    // Animación: Deslizar desde abajo
    option.style.animation = "fadeInUp 0.5s ease-out";

    // Ocultar las opciones anteriores
    hidePreviousOptions(optionId);
}

// Función para ocultar las opciones anteriores
function hidePreviousOptions(currentId) {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        if (node.id !== currentId) {
            node.classList.add('hidden');
        }
    });
}

// Función para finalizar el juego y mostrar el resumen
function finishGame() {
    // Ocultar todo el contenido
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => node.classList.add('hidden'));
    
    // Mostrar el resumen final
    const summary = document.getElementById('summary');
    summary.classList.remove('hidden');
}

// Función para reiniciar el juego y volver al primer nodo
function restartGame() {
    // Ocultamos todos los nodos
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => node.classList.add('hidden'));

    // Mostramos el primer nodo de nuevo (el nodo de "Comienza aquí")
    const introNode = document.getElementById('intro');
    introNode.classList.remove('hidden');
    
    // Reseteamos todos los botones a su estado original (habilitados)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "#ffb3b3";
        button.style.cursor = "pointer";
    });
}

// Asignamos el evento de clic al botón del gato
document.getElementById('restart-button').addEventListener('click', restartGame);
