let add = document.getElementsByClassName("classes-to-add")[0];
let remove = document.getElementsByClassName("classes-to-remove")[0];
let currentElement = document.querySelector("div[title='Current']");
let listClasses = document.getElementsByClassName("classes-list")[0].lastElementChild;

add.onblur = function() {
    if(add.value.length != 0) {
        let classes = add.value.split(" ");
        for(let i = 0; i < classes.length; i++) {
            currentElement.classList.add(classes[i].toLowerCase());
        }
    }
    add.value = "";
    showClasses();
    
};

remove.onblur = function() {
    if(remove.value.length != 0) {
        let classes = remove.value.split(" ");
        for(let i = 0; i < classes.length; i++) {
            currentElement.classList.remove(classes[i].toLowerCase());
        }
    }
    remove.value = "";
    showClasses();
};

function showClasses(){
    listClasses.remove();
    let newElement = document.createElement("div");
    let list_classes = document.getElementsByClassName("classes-list")[0];
    list_classes.append(newElement);
    listClasses = document.getElementsByClassName("classes-list")[0].lastElementChild; 
    let currentClasses = currentElement.classList.toString().split(" ").sort();
    console.log(currentClasses);
    if (currentElement.classList.toString().length === 0) {
        listClasses.textContent =  "No Classes To Show";
    }
    else {
        for(let i = 0; i < currentClasses.length; i++) {
            let spanElement = document.createElement("span");
            spanElement.textContent = currentClasses[i];
            listClasses.append(spanElement);
        }
    } 
}


