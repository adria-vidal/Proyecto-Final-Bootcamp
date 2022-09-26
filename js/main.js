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
let precioTotal = 0;
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
  precioCaja.innerHTML = `${precioTotal} €`;
     console.log('he soltado..', data);
     console.log();
};
