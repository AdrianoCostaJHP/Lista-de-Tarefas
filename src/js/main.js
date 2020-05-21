var textItem = document.getElementById('textItem');
var div = document.getElementById("lista");


var lista = JSON.parse(localStorage.getItem('listaTarefas')) || [];


function exibir(){
  div.innerHTML = '';

  for(item of lista){
    var newP = document.createElement('li');
    var textP = document.createTextNode(item);
    newP.style.listStyleType = "none";

      var link = document.createElement('i');
      
      link.setAttribute("class", "fas fa-check-circle");
      link.setAttribute("id", "verification");

      var pos= lista.indexOf(item);
      link.setAttribute('onclick', "deletar("+pos+")");

    var divHgroup = document.createElement('div');
    divHgroup.setAttribute("id","hgroup");
    
    divHgroup.appendChild(link);
    divHgroup.appendChild(newP);
    
    newP.appendChild(textP);
    div.appendChild(divHgroup);
  }
}

function adicionar(){
  if(textItem.value == ''){

  }
  else{
    var text = textItem.value;
    lista.push(text);

    textItem.value = '';
    exibir();
    saveToStorage();
  }
  
}

function deletar(pos){
  lista.splice(pos,1);

  exibir();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('listaTarefas', JSON.stringify(lista));
}





