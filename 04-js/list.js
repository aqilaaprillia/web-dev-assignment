function additem(){

    var ul = document.getElementById("list");
    var simpan = document.getElementById("simpan");
    var li = document.createElement("li");
    let input =document.getElementById("btn-add")

    li.setAttribute('id', simpan.value);
    li.appendChild(document.createTextNode(simpan.value));
    ul.appendChild(li);

    if(simpan.value===" "){
        alert("you must write something");
    }

}
function removeitem(){
    var ul = document.getElementById("list");
    var simpan = document.getElementById("simpan");
    var item = document.getElementById(simpan.value);
    ul.removeChild(item);

}