var fiber = "Fiber!";
var wood = "Wood!";
var stone = "Stone!";
var bugs = "Bugs!";

let  resources = [fiber, wood, stone, bugs];


  

function recorrer(array){
    for (var i = 0; i < resources.length; i++){
        console.log(resources[i]);
      }
}

function inicializar(){
    let text = "";

    for (var i = 0; i < resources.length; i++){
        text+='<li id="'+resources[i]+'" onClick="add(resources['+i+'])">'+resources[i]+'</li>';
        console.log(resources[i]);
        console.log(resources.length);
      }

      document.getElementById("listt").innerHTML = text;
    
}

  var quant = {};
  function add(resource) {
    var ul = document.getElementById("selectedd");
    var listItems = ul.querySelectorAll("li");
  
    if (listItems.length === 0) {
      var text = "";
      text += resource;
  
      var li = document.createElement("li");
      li.textContent = text;
      document.getElementById("selectedd").appendChild(li);
    } else {
      for (var i = 0; i < listItems.length; i++) {
        var litemp = listItems[i];
        if (litemp.textContent === resource) {
          console.log("existe!");
          break;
        } else {
          console.log("es distinto!");
          var linew = document.createElement("li");
          linew.textContent = resource;
          document.getElementById("selectedd").appendChild(linew);
          break;
        }
      }
    }
  }


// MAIN
inicializar();



/*
        for (var i = 0; i < listItems.length; i++) {
            var litemp = listItems[i];
            if(litemp.innerText == resource){
                
            }
        }
*/
