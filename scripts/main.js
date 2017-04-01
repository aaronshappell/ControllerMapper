function updateButton(){
    var name = document.getElementById("currentButtonName").innerHTML;
    var action = document.getElementById("currentButtonAction").value;
    document.getElementById(name).setAttribute("onclick", "selectButton({name:this.id, action:'" + action + "'})");
}

function selectButton(data){
    document.getElementById("currentButtonName").innerHTML = data.name;
    document.getElementById("currentButtonAction").value = data.action;
}
