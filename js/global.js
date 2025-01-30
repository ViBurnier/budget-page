window.onload = () =>{
    _('#wrap').innerHTML = template()
    
    document.title = site.title
    
    if(window.location.pathname.includes('consulta.html')){
        let consult = document.getElementById('pageConsult')
        consult.innerHTML = `${site.seeBudget}`
    }
}

