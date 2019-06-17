

// add task

function addTask() {
    document.querySelector('#addBtn').onclick = () => {

        let inputText = document.querySelector('#newTask');
        let taskLeft = document.querySelector('#incomplete-tasks');


        let inputbox = document.createElement("input");
        inputbox.type = "textbox";
        inputbox.className = "hidden";
        let listitem = document.createElement("LI");
        let innertext = document.createElement("span");
        innertext.className = "span-text";
        innertext.appendChild(document.createTextNode(inputText.value))
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        let editbtn = document.createElement("button");
        editbtn.innerText = "edit";
        editbtn.className = "editbtn";
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "delete";
        deletebtn.id = 'deletebtn';

        listitem.appendChild((checkbox));
        listitem.appendChild((inputbox));
        listitem.appendChild(innertext);
        listitem.appendChild((editbtn));
        listitem.appendChild((deletebtn));


        taskLeft.appendChild(listitem);
        inputText.value = "";
    }

}

//remove /edit/ move incomplete task 

document.querySelector("#incomplete-tasks").addEventListener("click", function (e) {
    var inputText = document.querySelector('.span-text');


    // e.target is the clicked element!
    // If it was a list item
    if (e.target && e.target.id == "deletebtn") {
        // List item found!  Output the ID!
        e.target.parentNode.remove();
    }
    else if (e.target && e.target.className == "editbtn") {
        e.target.previousSibling.className = 'hidden';
        e.target.previousSibling.previousSibling.className = 'show';
        e.target.previousSibling.previousSibling.value = inputText.innerText;
        e.target.className = 'editbtn2';

    }
    else if (e.target && e.target.className == "editbtn2") {
        var inputtext = document.querySelector('.show').value;
        console.log(inputtext);
        e.target.previousSibling.previousSibling.className = 'hidden';
        e.target.previousSibling.className = 'span-text';
        e.target.previousSibling.innerText = inputtext;
        e.target.className = 'editbtn';
    }

    else if (e.target && e.target.id == 'checkbox') {
        var itm = e.target.parentNode;


        e.target.parentNode.remove();
        var clone = itm.cloneNode(true);
        var childs = clone.childNodes;
        childs[2].className = 'completed';
        childs[1].className = 'hidden';
        childs[0].remove();
        childs[2].remove();



        document.querySelector('#completed-tasks').appendChild(clone);

    }
});

document.querySelector("#completed-tasks").addEventListener("click", function (e) {
    if (e.target && e.target.id == "deletebtn") {
        // List item found!  Output the ID!
        e.target.parentNode.remove();
    }
})




addTask();