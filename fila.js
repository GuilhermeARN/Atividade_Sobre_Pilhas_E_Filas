class MinhaFila{ // primeiro que entre é o primeiro que sai / último que entre é o último que sai
    //propriedade
    #itens = [];
    #inicio = 0;
    #fim = 0;

    //adicionar elemento ao fim da fila
    enqueue(elemento){
        //coloca o elemento no fim da fila
        this.#itens[this.#fim] = elemento;

        //incrementa o índice no fim da fila
        this.#fim++;
    }

    dequeue(){
        //se a fila estiver vazia retorna undefined
        if(this.estaVazia()){
            return undefined;
        }

        //obtém o primeiro item da lista
        const item = this.#itens[this.#inicio];

        //remove o item do inicio da lista
        delete this.#itens[this.#inicio];

        //move o índice do inicio para o próximo item
        this.#inicio++;

        //Quando o inicio e o fim estiverem alinhados
        if(this.#inicio === this.#fim){
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }

    front(){
        //se a fila estiver vazia 
        if(this.estaVazia()){
            return undefined;
        }
        //retorna o primeiro elemento
        return this.#itens[this.#inicio]
    }

    //verifica se a lista está vazia
    //verifica se os índices estão iguais 
    estaVazia = () => this.#fim === this.#inicio;

    //retorna o tamanho da fila
    //calcula a diferença entre fim e inicio
    tamanho = () => this.#fim - this.#inicio;
}

module.exports = MinhaFila;


/*• Simule uma fila de impressão onde diferentes documentos são
adicionados à fila. Cada documento deve ter um nome e um tamanho em
páginas. Ao processar a fila, exiba no console qual documento está sendo
impresso e remova-o da fila após a "impressão".

• Desafio Extra: Limite a capacidade da fila (ex: 5 documentos) e exiba uma
mensagem quando a fila estiver cheia. */