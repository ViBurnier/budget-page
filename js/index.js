/**
 *  chama a func getInfo() ao clicar no btn.
 */
function btnAdd() {
    getInfo()
    console.log(validarModal())
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
            if (this[i] == undefined || this[i] == null || this[i] == '') {
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
        let id = localStorage.getItem('id')
        let arr = Array()
        for (let i = 1; i <= id; i++) {
            let expenses = JSON.parse(localStorage.getItem(i))

            if (expenses === null) {
                continue
            }
            arr.push(expenses)
        }
        return arr
    }
}

let storage = new setNewItem()

/**
 * pega os dados dos campos no html, passa pra Despesas. 
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

    showModal(tituloM, corM, bodyM, expenses.ValidarDados());
}
/*
 * chama o modal para usuario saber se teve sucesso ou nao em armazena as informacoes no storage.
*/
function showModal(tituloM, corM, bodyM, sucesso) {
    if (sucesso) {
        corM.classList.add('text-success');
        corM.classList.remove('text-danger');
        tituloM.innerHTML = 'Registrado com sucesso!';
        bodyM.innerHTML = 'Despesa foi cadastrada com sucesso';
    } else {
        corM.classList.add('text-danger');
        corM.classList.remove('text-success');
        tituloM.innerHTML = 'Registro falhou!';
        bodyM.innerHTML = 'Existem campos que não foram preenchidos';
    }
    $('#modalRegister').modal('show');
}