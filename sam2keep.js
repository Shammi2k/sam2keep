let add_note = document.getElementById("add_note");


//Storing elements in local storage
const addToLocalStorage = ()=>{
    let notes = [];
    let all_notes = document.querySelectorAll("textarea");
    for(elem of all_notes){
        notes.push(elem.value);
    }
    localStorage.setItem('notes',JSON.stringify(notes));
}

//Retrieving elements from local storage
const retrieveFromLocalStorage = ()=>{
    try{
        let notes = JSON.parse(localStorage.getItem('notes'));
        console.log(notes);
        for(index in notes){
             add_all_notes(notes[index]);
        }
    }catch(error){console.log(error);}
}

//Taking in data as parameter and creating notes. Each note has a local scope in which it has a delete and edit function. Because of this reason pressing the buttons on a note only affects that particular note and nothing else
const add_all_notes = (data)=>{
    let note = document.createElement('div');
            note.classList.add("note");
            let HTMLMaterial = `
                                <div class="note-icons d-flex justify-content-end ">
                                    <i  class="fa fa-pencil-square-o rounded-circle edit_note"></i>
                                    <i  class="fa fa-trash rounded-circle delete_note"></i>
                                </div>
                                <div class="note-content d-flex justify-content-center">
                                    <textarea rows="7" cols="20" class="note_material" disabled></textarea>
                                </div>`;

            note.insertAdjacentHTML('afterbegin',HTMLMaterial);
            note_area.appendChild(note);
            let edit_note = note.querySelector(".edit_note");
            let delete_note = note.querySelector(".delete_note");
            let note_material = note.querySelector(".note_material");
            note_material.value = data;

            addToLocalStorage();

            //Call whenever delete is clicked
            delete_note.addEventListener('click',()=>{
                note.remove();
                addToLocalStorage();
            });

            //Call whenever edit is clicked, check previous mode and set next accordingly.
            edit_note.addEventListener('click',function(){
                if(note_material.disabled){
                    note_material.disabled = false;
                    this.classList.add("activated");
                    this.classList.remove("deactivated");
                }
                else{
                    note_material.disabled = true;
                    this.classList.add("deactivated");
                    this.classList.remove("activated");
                    addToLocalStorage();
                }
            });
        }

//Call function whenever add note is pressed.    
add_note.addEventListener('click',()=>{
    add_all_notes(""); 
});


//Always calls initially before starting the program to bring all data back from local storage.
retrieveFromLocalStorage();