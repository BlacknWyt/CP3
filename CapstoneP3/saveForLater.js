
//this function will store some text in the localstorage 
function saveForLaterFunc(find2){
    let hash = "";
    //this gets the the path name of a window
    let findhash = String(window.location.pathname);
    hash = findhash.split("").splice(1, findhash.length - 1).join("");
    
    //the user will input a name they wish to save an item as
    let saveNameKey = prompt("what would u like to save this as?");
    if(saveNameKey === ""){
        alert('Please enter a save name');
        stop();
    }
    else{
        alert("u have saved this item");
        let snk = saveNameKey;
        localStorage.setItem(snk, hash + " " + find2);
        alert("there are is now" + localStorage.length + "items in your save file");
    }   
}

//this loops through the local storage and outputs its content on the saved webpage
for(let a = 0; a <= localStorage.length - 1; a++){
    //creates li element that will have the text the user used to save an item and will then be appended to savelist element
    let li2 = document.createElement('li');
    li2.id = "liID" + a;
    li2.textContent = localStorage.key(a);
    let save = document.getElementById('saveList');
    save.appendChild(li2);

    //this creates a hyperlink that will return to the saved item when presses
    let newlink = document.createElement('a');
    newlink.textContent = " -got to orginal";
    newlink.href = localStorage.getItem(localStorage.key(a)).split(" ")[0] + "#"
    + localStorage.getItem(localStorage.key(a)).split(" ")[1]

    li2.appendChild(newlink);
}

//this jquery function will toggle a fade in and out for the saved items
$(document).ready(function(){
    $('#saveList').hide(function(){
        $("h2").click(function(){
            $("ol").fadeToggle();
        });
    });
});

//this should clear the local storage when the windows close
// window.onclose = function(){
//     localStorage.clear();
// }; 

