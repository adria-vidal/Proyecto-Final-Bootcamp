let efectivo = [
  { id: 'coin-5', valor: 0.05 },
  { id: 'coin-10', valor: 0.1 },
  { id: 'coin-20', valor: 0.2 },
  { id: 'coin-50', valor: 0.5 },
  { id: 'coin-1', valor: 1.0 },
  { id: 'coin-2', valor: 2.0 },
  { id: 'banknote-5', valor: 5.0 },
  { id: 'banknote-10', valor: 10.0 },
  { id: 'banknote-20', valor: 20.0 },
  { id: 'banknote-50', valor: 50.0 },
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
  /* prev: The accumulator. */
  /* value: The current value of the array. */
  const resultado = dineroRegistrado.reduce(
    (cont, value) => ((cont[value] = cont[value] + 1 || 1), cont),
    {}
  );

  console.log(resultado);

  // for (let i = 0; i < dineroRegistrado.length; i++) {
  //   let element = dineroRegistrado[i];
  //   switch (element) {
  //     case 'coin-5':
  //       let cont5 = 0;
  //       cont5++;
  //       let cantc5 = document.getElementById('cantidad-coin5');
  //       cantc5.innerHTML = cont5;
  //       console.log(cont5 + 'veces');
  //       break;
  //     case 'coin-10':
  //       let coin10 = 0;
  //       coin10++;
  //       console.log(coin10 + 'veces');
  //       break;
  //     case 'coin-20':
  //       let coin20 = 0;
  //       coin20++;
  //       console.log(coin20 + 'veces');
  //       break;
  //     case 'coin-50':
  //       let coin50 = 0;
  //       coin50++;
  //       console.log(coin50 + 'veces');
  //       break;
  //     case 'coin-1':
  //       let coin1 = 0;
  //       coin1++;
  //       console.log(coin1 + 'veces');
  //       break;
  //     case 'coin-2':
  //       let coin2 = 0;
  //       coin2++;
  //       console.log(coin2 + 'veces');
  //       break;

  //     default:
  //       break;
  //   }
  // }
  // dineroRegistrado.shift()
};
