const MinhaFila = require('./fila.js');

const variavel = new MinhaFila();

variavel.enqueue("Requisição para construção | Páginas: 32");
variavel.enqueue("Alvaraz | Páginas: 42");
variavel.enqueue("Imposto | Páginas: 102");

console.log();
console.log("Seus documentos: ");
console.log(variavel.front()); 
console.log("Você ainda tem:", variavel.tamanho(), "documentos no total"); 


console.log();
console.log("O documento:", variavel.front(), "está sendo impresso");
console.log();
console.log("Impressão concluida!!!");
console.log();

variavel.dequeue();

console.log("Você ainda tem:", variavel.tamanho(), "documentos no total"); 
console.log("O próximo a ser impresso sera:",variavel.front())

//usar -> node filaapp.js





/*• Simule uma fila de impressão onde diferentes documentos são
adicionados à fila. Cada documento deve ter um nome e um tamanho em
páginas. Ao processar a fila, exiba no console qual documento está sendo
impresso e remova-o da fila após a "impressão".

• Desafio Extra: Limite a capacidade da fila (ex: 5 documentos) e exiba uma
mensagem quando a fila estiver cheia. */