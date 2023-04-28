//use onclick="function(this.id)" to get an id u dont know
$(document).ready(function(){
    alert('double click so save something you like')
})

let id = "";
function myFunction(find){
    id = find;

    let saveNameKey = prompt('what would u like to save this as?');
    if(saveNameKey == ''){
        alert('Please enter a save name')
        stop();
    }
    else{
        alert("u have saved this item");
        let snk = "\"" + saveNameKey + "\"";

        let value = document.getElementById(find).value;
        localStorage.setItem(snk, value);
        alert("there are is now" + localStorage.length + "items in your save file");

    }   
}

for(let a = 0; a <= localStorage.length; a++){
    let li = document.createElement("li");
    li.id = "liID" + a;
    let key = localStorage.key(a);
    //let getitem = localStorage.getItem(key);
    li.textContent = key;
    document.getElementById('saveList').appendChild(li);
}

let hash = "contactDetails.html"

for(let a = 0; a <= localStorage.length - 1; a++){
    let newlink = document.createElement('a');
    newlink.textContent = "got to orginal"

    newlink.href = hash +"#" + id;
    document.getElementById('liID' + a).appendChild(newlink);

}


$(document).ready(function(){
    $('#saveList').hide(function(){
        $("h2").click(function(){
            $("ol").fadeToggle();
        });
    });

});


// let id = "";
// function myFunction(find){
//     id = find;

//     let saveNameKey = prompt('what would u like to save this as?');
//     if(saveNameKey == ''){
//         alert('Please enter a save name')
//         stop();
//     }
//     else{
//         alert("u have saved this item");
//         let snk = "\"" + saveNameKey + "\"";
//         let value = document.getElementById(find).value;
//         localStorage.setItem(snk, value);

//     }   
// }

// for(let a = 0; a <= localStorage.length; a++){
//     let li = document.createElement("li");
//     let key = localStorage.key(a)
//     let getitem = localStorage.getItem(key);
//     li.textContent = getitem;
//     document.getElementById('saveList').appendChild(li);
// }