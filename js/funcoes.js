/**
 * Retorna o "Node" de um elemento ou a "NodeList" de uma coleção de elementos usando o seletor especificado.
 * 
 * @param {string} seletor O seletor CSS do(s) elemento(s) a ser(em) selecionado(s).
 * @returns {Node|NodeList} O "Node" do elemento se houver apenas um, ou a "NodeList" dos elementos correspondentes.
 * 
 * Exemplos de uso:
 *     Selecionar por ID: let el = _('#meuID'); // Retorna o elemento com o id especificado
 *     Selecionar por classe: let el = _('.minhaClasse'); // Retorna todos os elementos com a classe "minhaClasse"
 *     Selecionar por tag (ou seletores mais complexos): let el = _('div > p'); // Retorna todos os <p> dentro de <div>
 *     Selecionar elemento por tag: let el = _('i'); // Retorna todos os elementos <i>
 */
function _(seletor) {
    if (seletor.startsWith('#') || seletor.startsWith('.') || seletor.includes(' ')) {
        const resultado = document.querySelectorAll(seletor);
        return resultado.length === 1 ? resultado[0] : resultado;
    }
    return document.querySelectorAll(seletor);
}

function template() {
    return `<header>
        <div class="container">
            <a href="index.html"><img src="${site.image}" alt=""></a>
            <a href="cadastro.html" class="">Cadastro</a>
            <a href="consulta.html">Consulta</a>
        </div>
    </header>

    <main>
            <div>
                <div class="container">
                    <div class="row">
                        <!--DAY-->
                        <div class="col-md-2">
                            <form action="">
                                <div class="form-group">
                                    <input type="number" name="" class="form-control" placeholder="Day" id="day">
                                </div>
                            </form>
                        </div>
                        <!--DAY-->
                        <!--MONTH-->
                        <div class="col-md-2">
                            <form action="">
                                <div class="form-group">
                                    <select class="form-control" id="month">
                                        <option value="0">Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <!--MONTH-->
                        <!--YEAR-->
                        <div class="col-md-2">
                            <form action="">
                                <div class="form-group">
                                    <input type="number" name="" class="form-control" placeholder="Year" id="year">
                                </div>
                            </form>
                        </div>
                        <!--YEAR-->
                        <!--TYPE-->
                        <div class="col-md-6">
                            <select class="form-control" id="type">
                                <option>Type</option>
                                <option value="1">Alimentação</option>
                                <option value="2">Educação</option>
                                <option value="3">Lazer</option>
                                <option value="4">Saúde</option>
                                <option value="5">Transporte</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <!--DESCRIPTION-->
                        <div class="col-md-8">
                            <input type="text" class="form-control" placeholder="Description" id="descricao" />
                        </div>
                        <!--VALUE-->
                        <div class="col-md-2">
                            <input type="text" class="form-control" placeholder="Value" id="valor" />
                        </div>
                        <!--ADD-->
                        <div class="col-md-2 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" onclick="btnAdd()">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

                  <span id="pageConsult"></span>
 
    </main>

    <div class="modal fade" id="modalRegister" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" id='corM'>
                            <h5 class="modal-title" id="tituloM"> </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-body"> <p id="modalBody"></p> </div>
                        <div class="modal-footer">  </div>
                    </div>
                </div>
            </div>
    `
}