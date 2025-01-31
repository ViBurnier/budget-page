/**
 *  chama a func getInfo() ao clicar no btn.
 */
function btnAdd() {
    getInfo()
    
}

/**
 * objeto que recebe os valores de getInfo() e verifica se as informacoes nao estao vazias.
 */
class Despesas {
    constructor(day, month, year, type, description, valor) {
        this.day = day
        this.month = month
        this.year = year
        this.type = type
        this.description = description
        this.valor = valor
    }
    /**
     * passa por cada campo do expenses no getInfo verificando se o valor esta vazio(false) ou nao(true).
     */
    ValidarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == null || this[i] == '' || this[i] == 'Type' || this[i] == 0) {
                return false
            }
        }
        return true
    }
}

/**
 * objeto que cria um id caso nao exista.
 */
class setNewItem {
    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }
    /**
     *  pega o id anterior e retorna o id mais 1 criando um novo id.
     */
    getNextId() {
        let id = localStorage.getItem('id')
        return Number(id) + 1
    }

    /**
     * id recebe um novo id, seta o id mais um json transformando os valores expenses em string, fala qual o 'id' usando id novo.
     */
    storageExpenses(expenses) {
        let id = this.getNextId()

        localStorage.setItem(id, JSON.stringify(expenses))

        localStorage.setItem('id', id)
    }

    recoverRegister() {
        // Obtém o valor do item 'id' armazenado no localStorage.
        let id = localStorage.getItem('id');
        
        // Cria um array vazio para armazenar as despesas recuperadas.
        let arr = Array();
        
        // Loop para iterar desde 1 até o valor de 'id'.
        for (let i = 1; i <= id; i++) {
            // Recupera o item do localStorage com a chave igual ao valor de 'i' e o transforma de volta em objeto.
            let expenses = JSON.parse(localStorage.getItem(i));
            
            // Se não houver despesa (item for null), continua para a próxima iteração do loop.
            if (expenses === null) {
                continue;
            }
            
            // Adiciona a despesa ao array 'arr'.
            arr.push
        }
    }
}

let storage = new setNewItem()

/**
 * pega os dados dos campos no html passando para Despesas. 
 */

function getInfo() {
    let day = document.getElementById('day')
    let month = document.getElementById('month')
    let year = document.getElementById('year')
    let type = document.getElementById('type')
    let description = document.getElementById('descricao')
    let valor = document.getElementById('valor')
    let tituloM = document.querySelector('h5#tituloM')
    let corM = document.querySelector('div#corM')
    let bodyM = document.querySelector('p#modalBody')
    let expenses = new Despesas(day.value, month.value, year.value, type.value, description.value, valor.value)
    storage.storageExpenses(expenses)

    showModal(tituloM, corM, bodyM, expenses.ValidarDados(),day, month, year, type, description, valor);
}

function clearfields(d, m, y, t, de, v){
        d.value = ''
        m.value = 0
        y.value = ''
        t.value = 'Type'
        de.value = ''
        v.value = ''

}

/*
 * chama o modal para usuario saber se teve sucesso ou nao em armazena as informacoes no storage.
*/
function showModal(tituloM, corM, bodyM, sucesso, day, month, year, type, description, valor) {
    if (sucesso) {
        corM.classList.add('text-success');
        corM.classList.remove('text-danger');
        tituloM.innerHTML = 'Registrado com sucesso!';
        bodyM.innerHTML = 'Despesa foi cadastrada com sucesso';
        clearfields(day, month, year, type, description, valor)


    } else {
        corM.classList.add('text-danger');
        corM.classList.remove('text-success');
        tituloM.innerHTML = 'Registro falhou!';
        bodyM.innerHTML = 'Existem campos que não foram preenchidos';
    }
    $('#modalRegister').modal('show');
}

