let efectivo = [
  { id: 'coin-5', valor: 0.05, cantidad: 0 },
  { id: 'coin-10', valor: 0.1, cantidad: 0 },
  { id: 'coin-20', valor: 0.2, cantidad: 0 },
  { id: 'coin-50', valor: 0.5, cantidad: 0 },
  { id: 'coin-1', valor: 1.0, cantidad: 0 },
  { id: 'coin-2', valor: 2.0, cantidad: 0 },
  { id: 'banknote-5', valor: 5.0, cantidad: 0 },
  { id: 'banknote-10', valor: 10.0, cantidad: 0 },
  { id: 'banknote-20', valor: 20.0, cantidad: 0 },
  { id: 'banknote-50', valor: 50.0, cantidad: 0 },
];

let precioCaja = document.getElementById('precioCaja');
let precioTotal = 0.0;
let dineroRegistrado = [];

precioCaja.innerHTML = `${precioTotal} €`;

const drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
};
const allowDrop = (ev) => {
  //cancelamos el evento si lo permite
  ev.preventDefault();
};

const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData('text');
  let precio = efectivo.find((objeto) => {
    return objeto.id == data;
  });

  precioTotal += precio.valor;
  precioCaja.innerHTML = `${precioTotal.toFixed(2)} €`;
  dineroRegistrado.push(data);

  console.log('he soltado..', data);
  console.log(dineroRegistrado);
};
const reset = () => {
  precioTotal = 0.0;
  precioCaja.innerHTML = 0.0 + ' €';

  /* Counting the number of times each element appears in the array. */
  /* total: The accumulator. */
  /* cartItem: The current value of the array. */
  /*const resultado = dineroRegistrado.reduce((total, cartItem) => {
    (total[cartItem] = total[cartItem] + 1 || 1), total;
    return total;
  }, {}); */

  //console.log(resultado);
};
