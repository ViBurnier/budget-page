window.onload = () =>{
    _('#wrap').innerHTML = template()
}

/**
if(expenses.ValidarDados()){
    $('#success').modal('show')
}
else{
   $('#erro').modal('show')
}
 

modalConfig(expenses)
function modalConfig(valores){

    var modal = {
        idmodal: '',
        color: ''
    }

    if(valores.ValidarDados()){
        modal.idmodal = 'success'
        modal.color = 'success'
        $('#success').modal('show')
    }
    else{
        modal.idmodal = 'failed'
        modal.color = 'danger'
        $('#failed').modal('show')
    }
}  
 */
