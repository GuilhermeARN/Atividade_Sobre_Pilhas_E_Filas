const MinhaPilha = require('./pilha.js');

//usando 
const meuBau = new MinhaPilha();

//adicionando item 
meuBau.adicionar("Coroa");
meuBau.adicionar("Taças");
meuBau.adicionar("Ouro");

//olhar o ultimo 
console.log();
console.log("No topo da sua pilha tem:", meuBau.topo());
console.log();

//remover
console.log("Você removeu:",meuBau.remover(), "da sua pilha");
console.log();

//olhar o ultimo 
console.log("No topo da sua pilha tem:", meuBau.topo());
console.log();

//ta vazio 
console.log("Você ainda tem:",meuBau.tamanhoPilha(),"itens no bau");
//console.log(meuBau.tamanhoPilha());




//usar ->  cd aula5_Exe2 
//usar -> node pilhaapp.js


/*• O Capitão Barbarruiva tem um baú cheio de tesouros, mas ele só
consegue pegar o último item que colocou.

• Crie um programa para ajudá-lo a:

– Guardar um novo tesouro no baú.
– Retirar o último tesouro guardado.
– Olhar qual é o último tesouro sem pegá-lo.
– Saber se o baú está vazio. */