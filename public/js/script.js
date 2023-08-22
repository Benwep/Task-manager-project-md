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

function CreateNew(){
    if (document.getElementById("InputBar").value != ""){
        let elem = document.getElementById("TaskContainer");
        let ID = elem.lastElementChild.id.match(/-?\d+\.?\d*/);// Last number of each children id
        let newID = parseInt(ID) + 1;
    
        newID = "Task" + newID;
    
        elem = $("#Task0").clone(true);
        elem.attr("id",newID);
        elem.appendTo(document.getElementById("TaskContainer"));
    
        elem.css("display", "flex");

        let NewChildID = parseInt(ID) + 1;
        elem.find("#Checkmark0").attr("id","Checkmark" + NewChildID);

        NewChildID = parseInt(ID) + 1;

        delBtn = elem.find("#0");//new delete button
        delBtn.attr("id",NewChildID);

        document.getElementById(newID).childNodes[2].nodeValue = document.getElementById("InputBar").value;

        //var clone = document.getElementByID("someElement").cloneNode(true);
    }
}
