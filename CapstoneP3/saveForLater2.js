//use onclick="function(this.id)" to get an id u dont know

let id = "";
function myFunction2(find){
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
    li.id = "liID2" + a;
    let key = localStorage.key(a);
    //let getitem = localStorage.getItem(key);
    li.textContent = key;
    document.getElementById('saveList').appendChild(li);
}

let hash2 = "aboutMe.html"

for(let a = 0; a <= localStorage.length; a++){
    let newlink = document.createElement('a');
    newlink.textContent = "got to orginal"

    newlink.href = hash2 +"#" + id;
    document.getElementById('liID2' + a).appendChild(newlink);

}

