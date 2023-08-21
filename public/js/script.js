window.saveArray = new Array(); //store tasks

$('#NewTaskBtn').on("mouseenter", () => {
    console.log("Hover!");
    $('#TaskBtnText').addClass("Active");
})

$('#NewTaskBtn').on("click", () => {
    $("#NewTaskBtn").css("border-color", "#e6ffff");

    $("#InputPanel").css("opacity",1);

    setTimeout(() => $("#NewTaskBtn").css("border-color", "#036d6d"), 200);
});

function DeleteTask(ThisID){
    let ID = "Task" + ThisID;

    document.getElementById(ThisID).remove();
    document.getElementById(ID).remove();

    console.log(ThisID);
}
function TickBox(ThisID){
    console.log("Id 1" + ThisID);
    let ID = ThisID.match(/-?\d+\.?\d*/);
    console.log("Id2 " + ID);

    if (document.getElementById(ThisID).checked == false){
        document.getElementById(ID).style.display = "none";
        TaskID = "Task" + ID;
        document.getElementById(TaskID).style.textDecorationLine = "none";
    }
    else{
        document.getElementById(ID).style.display = "block";
        TaskID = "Task" + ID;
        document.getElementById(TaskID).style.textDecorationLine = "line-through";
    }
}

$('#NewTaskBtn').on("mouseleave", () => {
    $('#TaskBtnText').removeClass("Active");
})

function CreateNew(){
    if (document.getElementById("InputBar").value != ""){
        let elem = document.getElementById("TaskContainer");
        let ID = elem.lastElementChild.id.match(/-?\d+\.?\d*/);// Last number of each children id
        let newID = parseInt(elem.lastElementChild.id) + 1;
    
        newID = "Task" + newID;
    
        elem = $("#Task0").clone(true);
        elem.attr("id",newID);
        elem.appendTo(document.getElementById("TaskContainer"));
    
        elem.css("display", "block");

        let NewChildID = parseInt(ID) + 1;
        elem.find("#Checkmark0").attr("id","Checkmark" + NewChildID);

        NewChildID = parseInt(ID) + 1;
        delBtn = $("#0").clone(true);//new delete button
        delBtn.attr("id",NewChildID);
        delBtn.appendTo(document.getElementById("TaskContainer"));

        document.getElementById(newID).childNodes[2].nodeValue = document.getElementById("InputBar").value;

        document.getElementById("InputPanel").style.opacity = 0;

        //var clone = document.getElementByID("someElement").cloneNode(true);
        saveArray.push(elem.outerHTML);
    }
}





function save(){
    localStorage["elements"] = JSON.stringify(saveArray);
}
function load(){
    var tempsave = JSON.parse(localStorage["elements"]);

    for (var i = 0; i < tempsave.length; i++){      
        var element = document.createElement('div');
        document.getElementById('element-container').appendChild(element); 
        element.outerHTML = tempsave[i];    
    }
}