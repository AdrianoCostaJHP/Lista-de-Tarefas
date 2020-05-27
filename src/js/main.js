var inputElement = document.getElementById('textItem');
var ulLista = document.getElementById("lista");


var lista = JSON.parse(localStorage.getItem('listaTarefas')) || [];


function exibir(){
  ulLista.innerHTML = '';

  for(item of lista){
    var containerP = document.createElement('p');
    var textoP = document.createTextNode(item);

      var iconeLista= document.createElement('i');
      
      iconeLista.setAttribute("class", "fas fa-check-circle");
      iconeLista.setAttribute("id", "icon");

      var posicao= lista.indexOf(item);
      iconeLista.setAttribute('onclick', "deletar("+posicao+")");

    var liLista = document.createElement('li');
    liLista.setAttribute("id","liContainer");
    
    liLista.appendChild(iconeLista);
    liLista.appendChild(containerP);
    
    containerP.appendChild(textoP);
    ulLista.appendChild(liLista);
  }
}

function adicionar(){
  if(inputElement.value == ''){

  }
  else{
    var text = inputElement.value;
    lista.push(text);

    inputElement.value = '';
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





