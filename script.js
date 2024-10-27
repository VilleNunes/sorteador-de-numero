//selecionar o botao de sortear
const buttonSortear = document.querySelector('#button-sortear')
//criando div para inserir os resultados
const divConteudo = document.createElement('div');
// adicionando layout responsive da div criado
divConteudo.classList.add('resultado-layout');
//selecionando a main para inserir os resultados
const main = document.querySelector('main');
//selecionando o conteudo
const conteudo = document.querySelector('.conteudo');
//pegando valores dos inputs
const qtdNumero = document.querySelector('#num-1');
const min = document.querySelector('#num-2');
const max = document.querySelector('#num-3');
const inputCheck = document.querySelector('.numeroRepetir');
//criando div para inserir os resultados
const divConteudos = document.createElement('div');
divConteudos.classList.add('conteudoFlex');
//variavel para inserir os numeros sorteado
const listNumero = [];



buttonSortear.addEventListener('click',(event)=>{
  event.preventDefault();
  
  //limpando div anterior
  conteudo.innerHTML = `
  <h1 class="title-sorteio">Resultado do Sorteio</h1>
   <p class="resultado-sorteio">1 resultado</p>
  `;
  sortearNumero();

  divConteudo.innerHTML = listNumero.map(function(n){
    return `<p class="newResultado">${n}</p>`;
  }).join("");

  conteudo.appendChild(divConteudo);
  buttonSortear.textContent ="Sortear Novamente"
  conteudo.appendChild(buttonSortear)

});

function sortearNumero() {
  //limpar array
  listNumero.length = 0;

  for (let index = 0; index < qtdNumero.value; index++) {
    //gerar numero aleatorio
    const numeroSorteado = Math.floor(Math.random() * (parseInt(max.value) - parseInt(min.value) + 1)) + parseInt(min.value);
   if(inputCheck.checked){
     //verificar se numero ja existe no array
     if (!listNumero.includes(numeroSorteado)) {
      //adicionar numero ao array
      listNumero.push(numeroSorteado);
    } else {
      //se numero ja existe, sortear novamente
      index--;
    }
   }else{
     //adicionar numero ao array
     listNumero.push(numeroSorteado);
   }

  }
}


  


