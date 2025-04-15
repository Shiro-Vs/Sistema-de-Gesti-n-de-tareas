

const btnModoOscuro = document.getElementById('btnModoOscuro');
const tabla = document.getElementById('tablaTareas');

btnModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');

  // Alternar clase de la tabla
  if (tabla.classList.contains('table-dark')) {
    // Cambiar a modo claro
    tabla.classList.remove('table-dark');
    tabla.classList.add('table-light');
    btnModoOscuro.textContent = 'Modo oscuro';
    btnModoOscuro.classList.remove('btn-light');
    btnModoOscuro.classList.add('btn-dark');
  } else {
    // Cambiar a modo oscuro
    tabla.classList.remove('table-light');
    tabla.classList.add('table-dark');
    btnModoOscuro.textContent = 'Modo claro';
    btnModoOscuro.classList.remove('btn-dark');
    btnModoOscuro.classList.add('btn-light');
  }
});


