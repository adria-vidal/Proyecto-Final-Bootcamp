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
let precioTotal = 0.00;
precioCaja.innerHTML = `${precioTotal} €`;

let dineroRegistrado = []

const drag = (ev) => {
  ev.dataTransfer.setData('text', ev.target.id);
  // let borrar = efectivo.find((objeto) =>{
  //   borrar.id
  // })
  
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
  console.log('he soltado..', data);
  dineroRegistrado.push(data)
  console.log(dineroRegistrado);
  
};
const reset = () => {
  precioTotal = 0.00;
  precioCaja.innerHTML = 0.00 + " €";
  // dineroRegistrado.shift()
};
const recuento = (array) =>{
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    switch (element) {
      case "coin-5":
        
        break;
    
      default:
        break;
    }
    
  }
}
