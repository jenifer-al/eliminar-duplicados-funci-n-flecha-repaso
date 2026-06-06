// --- 1. Selección de elementos (DOM) ---
const input = document.getElementById('numero');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// --- 2. Función lógica ---
// Utilizamos el operador spread (...) con Set para filtrar únicos
const eliminarDuplicados = (lista) => {
  return [...new Set(lista)];
};

// --- 3. Función del manejador ---
const mostrar = () => {
  // Ejemplo base según tu enunciado
  const datosEjemplo = ["x", 10, "x", 2, "10", 10, true, true];
  
  // Ejecutamos la función
  const sinDuplicados = eliminarDuplicados(datosEjemplo);
  
  // Mostramos el resultado en el DOM
  resultado.textContent = `Resultado: [${sinDuplicados.join(", ")}]`;
  console.log(sinDuplicados);
};

// --- 4. Escuchador ---
btnCalcular.addEventListener('click', mostrar);