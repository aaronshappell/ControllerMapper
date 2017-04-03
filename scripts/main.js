function updateButton(){
    //var name = document.getElementById("currentButtonName").innerHTML;
    //var action = document.getElementById("currentButtonAction").value;
    //document.getElementById(name).setAttribute("onclick", "selectButton({name:this.id, action:'" + action + "'})");
}

function selectButton(id, data){
    var highlights = document.getElementsByClassName("highlight");
    for(i = 0; i < highlights.length; i++){
        highlights[i].setAttribute("visibility", "hidden");
    }
    document.getElementById("h" + id).setAttribute("visibility", "visible");

    var table = document.getElementById("selectedButton");
    while(table.hasChildNodes()){
        table.removeChild(table.firstChild);
    }

    for(i = 0; i < data.length; i += 2){
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.appendChild(document.createTextNode(data[i]));
        row.appendChild(nameCell);

        var actionCell = document.createElement("td");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", data[i + 1]);
        input.setAttribute("onkeyup", "updateButton()");
        actionCell.appendChild(input);
        actionCell.appendChild(document.createElement("br"));
        row.appendChild(actionCell);

        table.appendChild(row);
    }
}
