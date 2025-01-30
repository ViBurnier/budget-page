function loadListExpense(){
   let expensesList = storage.recoverRegister()
   
   let tb = document.getElementById('listExpense')
   
   expensesList.forEach(function(d){
      //criando linha
      let line = tb.insertRow()

      //criando as colunas
      line.insertCell(0).innerHTML = `${d.day} / ${d.month} / ${d.year}`

      switch(d.tipo){
         case '1': d.type = 'Alimentação'
            break

         case '2': d.type = 'Educação'
            break

         case '3': d.type = 'Lazer'
            break
         
         case '4': d.type = 'Saúde'
            break
         
         case '5': d.type = 'Transporte'
            break
      }
      
      line.insertCell(1).innerHTML = d.type
      line.insertCell(2).innerHTML = d.description
      line.insertCell(3).innerHTML = d.valor
   })
} 