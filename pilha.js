class MinhaPilha { //primeiro que entre é o último que sai / último que entra é o primeiro que sai

    //propriedade
    #itens = [];
    #tamanho = 0;

    //Adicionar elemento
    adicionar(elemento) {

        this.#itens[this.#tamanho] = elemento;

        this.#tamanho++;
    }

    //Remover
    remover() {
        //se a pilha estiver vazia
        if(this.#tamanho === 0) {
            return undefined;
        }

        //pega o item do topo
        const ultimoItem = this.#itens[this.#tamanho - 1];

        //remove o item do topo 
        delete this.#itens[this.#tamanho - 1];

        //decrementa o tamanho da pilha
        this.#tamanho--;

        //retorna o item removido
        return ultimoItem;

    }

    //topo, retorna o elemento do topo sem removê-lo
    topo() {

        // se a pilha estiver vazia 
        if(this.#tamanho === 0){
            return undefined;
        }

        //retorna o item do topo
        return this.#itens[this.#tamanho - 1];
    }

    //esta vazia, tamanho da pilha
    estaVazia = () => this.#tamanho === 0;

    tamanhoPilha = () => this.#tamanho;
}
 
module.exports = MinhaPilha;





/*• O Capitão Barbarruiva tem um baú cheio de tesouros, mas ele só
consegue pegar o último item que colocou.

• Crie um programa para ajudá-lo a:

– Guardar um novo tesouro no baú.
– Retirar o último tesouro guardado.
– Olhar qual é o último tesouro sem pegá-lo.
– Saber se o baú está vazio. */