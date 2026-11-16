// Lee un número del campo.
function numero(id) {
  let campo = document.getElementById(id);
  return campo.value.trim() === '' ? NaN : Number(campo.value);
}

// Muestra el texto del resultado.
function mostrar(id, texto) {
  document.getElementById(id).textContent = texto;
}

// Suma tres números.
function sumar() {
  let a = numero('s1'), b = numero('s2'), c = numero('s3');
  mostrar('r1', [a, b, c].some(isNaN) ? 'Completa los tres números.' : 'La suma de los valores ingresados es: ' + (a + b + c));
}

// Calcula el cuadrado.
function cuadrado() {
  let n = numero('n');
  mostrar('r2', isNaN(n) ? 'Escribe un número.' : 'El cuadrado de ' + n + ' es: ' + (n * n));
}

// Calcula el promedio de tres notas.
function promedio() {
  let nombre = document.getElementById('nombre').value.trim();
  let a = numero('p1'), b = numero('p2'), c = numero('p3');
  mostrar('r3', !nombre || [a, b, c].some(isNaN) ? 'Completa el nombre y las tres notas.' : 'El promedio de ' + nombre + ' es: ' + ((a + b + c) / 3).toFixed(2) + ' puntos');
}

// Convierte metros a otras unidades.
function convertir() {
  let m = numero('metros');
  mostrar('r4', isNaN(m) ? 'Escribe los metros.' : m + ' metros equivalen a ' + (m * 100) + ' centímetros y ' + (m / 1000) + ' kilómetros.');
}

// Compara dos números.
function comparar() {
  let a = numero('c1'), b = numero('c2');
  if (isNaN(a) || isNaN(b)) mostrar('r5', 'Completa los dos números.');
  else if (a === b) mostrar('r5', 'Los dos números son iguales. Su diferencia es 0.');
  else mostrar('r5', 'El número mayor es ' + Math.max(a, b) + ', el menor es ' + Math.min(a, b) + ', y su diferencia es ' + Math.abs(a - b) + '.');
}
