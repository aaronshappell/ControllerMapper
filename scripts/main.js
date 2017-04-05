var idList = {
    "a": {
        "labelNames": ["A"]
    },
    "b": {
        "labelNames": ["B"]
    },
    "x": {
        "labelNames": ["X"]
    },
    "y": {
        "labelNames": ["Y"]
    },
    "left": {
        "labelNames": ["Left Trigger", "Left Bump"]
    },
    "right": {
        "labelNames": ["Right Trigger", "Right Bump"]
    },
    "leftjoy": {
        "labelNames": ["Left Joystick Button", "Left Joystick X", "Left Joystick Y"]
    },
    "rightjoy": {
        "labelNames": ["Right Joystick Button", "Right Joystick X", "Right Joystick Y"]
    },
    "dpad": {
        "labelNames": ["DPAD Up", "DPAD Down", "DPAD Left", "DPAD Right"]
    },
    "back": {
        "labelNames": ["Back"]
    },
    "start": {
        "labelNames": ["Start"]
    }
};

$(".highlight").hide();
$(document).ready(function() {
    for(var id in idList){
        let element = $("#" + id);
        let highlight = $("#h" + id);
        let idData = idList[id];
        element.on("click", function(){
            $(".highlight").hide();
            highlight.fadeIn();
            for(var name in idData.labelNames){
                //create table row
                console.log(idData.labelNames[name]);
            }
        });
    }
});

/*
var MyApp = function(){
    var idList = {
        "a": {
            "labelNames": ["A"]
        },
        "b": {
            "labelNames": ["B"]
        },
        "x": {
            "labelNames": ["X"]
        },
        "y": {
            "labelNames": ["Y"]
        },
        "left": {
            "labelNames": ["Left Trigger", "Left Bump"]
        },
        "right": {
            "labelNames": ["Right Trigger", "Right Bump"]
        },
        "leftjoy": {
            "labelNames": ["Left Joystick Button", "Left Joystick X", "Left Joystick Y"]
        },
        "rightjoy": {
            "labelNames": ["Right Joystick Button", "Right Joystick X", "Right Joystick Y"]
        },
        "dpad": {
            "labelNames": ["DPAD Up", "DPAD Down", "DPAD Left", "DPAD Right"]
        },
        "back": {
            "labelNames": ["Back"]
        },
        "start": {
            "labelNames": ["Start"]
        }
    };
};
MyApp.prototype.init = function () {
    for(var id in this.idList){
        let element = $(id);
        let idData = this.idList[id];
        element.on("click", function(){
            for(var name in idData.labelNames){
                //create table row
                console.log(name);
            }
        });
    }
}
var app = new MyApp();
$(".highlight").hide();
$(document).on("load", app.init());
*/

/*
$(".highlight").hide(); //Don't wait for document to load

function updateButton(){
    //var name = document.getElementById("currentButtonName").innerHTML;
    //var action = document.getElementById("currentButtonAction").value;
    //document.getElementById(name).setAttribute("onclick", "selectButton({name:this.id, action:'" + action + "'})");
}

function selectButton(id, data){
    $(".highlight").hide();
    $("#h" + id).fadeIn();

    $("#inputContainer").hide();
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
    $("#inputContainer").fadeIn();
}
*/
