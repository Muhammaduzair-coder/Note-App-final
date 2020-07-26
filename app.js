console.log("Welcome to notes js made by uzair");



shownotes();
// let addbtn = document.getElementById("addbtn");

// addbtn.addEventListener("click", function (e) {
//     let addtxt = document.getElementById("addtxt")
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//         noteobj = [];
//     }

//     else {
//         noteobj = JSON.parse(notes);
//     }

//     noteobj.push(addtxt.value);
//     localStorage.setItem("notes", JSON.stringify(noteobj))
//     addtxt.value = "";
   
//     shownotes();
// });

// function shownotes() {

//     let notes = localStorage.getItem("notes")
//     if (notes === null) {
//         noteobj = []
//     }
//     else {
//         noteobj = JSON.parse(notes)
//     }
//     let html = "";
//     noteobj.forEach(
//         function (element , index) {
//             html += `<div class="noteCard  my-2 mx-2 border  border-info shadow" style="width: 18rem;">
// <div class="card-body">
//   <h5 class="card-title"> Note ${index + 1}</h5>
//   <p class="card-text">${element}</p>
//  <button  id="${index}"onclick="deletenote(this.id)" class="btn btn-primary"> Delete Note </button>
// </div>
// </div>`
//         }
//     );
//     let elm = document.getElementById("notes");
//     if (noteobj.length != 0) {
//         elm.innerHTML = html
//     }
//     else {
//         elm.innerHTML = `nothing to show !plz add`
//     }
// }





 

// function deletenote(index) {
//     let notes = localStorage.getItem("notes");
//     if(notes === null){
//         noteobj  = [];
//      } else {
//         noteobj = JSON.parse(notes); }

//         noteobj.splice(index, 1);
//     localStorage.setItem("notes" , JSON.stringify(noteobj));
//     shownotes();
// }




// let search = document.getElementById("searchtxt");
// search.addEventListener("input" , function(){
//     let inputValue =  search.value.toLowerCase();
//     console.log('value found ! ' , inputValue);
// let noTecd =  document.getElementsByClassName('noteCard')
// Array.from(noTecd).forEach(function(element){
//     let cardtxt = element.getElementsByTagName('p')[0].innerText;
//     console.log(cardtxt);
//     if(cardtxt.includes(inputValue)){
//         element.style.display = "block";

//     }
//     else{
//         element.style.display = "none";

//     }
// })
// })


let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click" , function(e){
    let addtxt = document.getElementById("addtxt")
    let notes = localStorage.getItem("notes");
    if(notes == null){
        noteobj = [];
    }
    else{
        noteobj = JSON.parse(notes);
       
    }
    
    noteobj.push(addtxt.value);
    localStorage.setItem("notes" , JSON.stringify(noteobj))
    // console.log(noteobj);
    addtxt.value = "";
    shownotes();
})

function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        noteobj = [];
    }
    else{
        noteobj = JSON.parse(notes);
       
    }
    let html = "";
    noteobj.forEach(function (element , index){
        html += `<div class="noteCard  my-2 mx-2 border  border-info shadow" style="width: 18rem;">
 <div class="card-body">
   <h5 class="card-title"> Note ${index + 1}</h5>
   <p class="card-text">${element}</p>
  <button  id="${index}"onclick="deletenote(this.id)" class="btn btn-danger"> Delete Note </button>
 </div>
</div>`
    })
        let elm = document.getElementById("notes")
        if (noteobj.length != 0 ){
elm.innerHTML = html
        }
        else{
            elm.innerHTML = "Nothing to show   !  Plz add a note"
        }
    
}

function deletenote(index){
    let notes = localStorage.getItem("notes");
if(notes == null){
    noteobj = [];
}
else{
    noteobj = JSON.parse(notes);
   
}
noteobj.splice(index , 1)
localStorage.setItem("notes" , JSON.stringify(noteobj))
shownotes();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input" , function(){
 let inputval = search.value.toLowerCase();
 let card =  document.getElementsByClassName("noteCard")
 Array.from(card).forEach(function(element){
     let txt = element.getElementsByTagName("p")[0].innerText;
     if (txt.includes(inputval)){
         element.style.display = "block";
     }
     else{
        element.style.display = "none";

        
     }
 })
})



