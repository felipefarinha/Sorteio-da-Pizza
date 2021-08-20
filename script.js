
///////////////////////////////////////////
const participantes = [
  {id: 1, nome: "Douglas", count: 0},
  {id: 2, nome: "Felipe", count: 0},
  {id: 3, nome: "Lucas", count: 0},
  {id: 4, nome: "Rodrigo", count: 0}
];
///////////////////////////////////////////
var min = 1;
var max = participantes.length +1;
var random;

document
  .getElementById('buttom')
  .addEventListener('click', () => {

  zerar();

  for (let i=0; i < (participantes.length +1); i++){
    // random_num (min, max); 
    count();
  }

  function count() {

    random_num (min, max); //gera um número aleatório
    
    if(random === 1){
        participantes[0].count++
    } else if(random === 2){
        participantes[1].count++
    } else if(random === 3){
        participantes[2].count++
    } else if(random === 4){
        participantes[3].count++
    }
  };
  //sorteia um número
  function random_num (min, max) {
    random = Math.floor(Math.random() * (max - min) + min );
    // console.log('Random: ', +random);
      return Number(random);
  };

  //ordena a lista
  participantes.sort(function (a, b) {
    if (a.count > b.count) {return 1;}
    if (a.count < b.count) {return -1;}
      return 0;
  });

document
  .getElementById('div-resultado')
  .innerHTML = `<p>Parabéns ${participantes[participantes.length -1].nome}!
   A pizza é por sua conta hoje 🍕🥳🤭</p>`;

  console.log("*Critério de desempate: Ordem alfabética do primeiro nome \n\nlog:")
  console.log(participantes)
  
})

function zerar(){

  for (let i=0; i < (participantes.length); i++){
      participantes[i].count = 0;
    }
  // console.log(participantes);    
}

// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(`Parabéns ${participantes[participantes.length -1].nome}! A pizza é por sua conta hoje 🍕🥳🤭`);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log(`\nSeu nome foi sorteado ${participantes[participantes.length -1].count} vezes`);

