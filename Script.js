const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

addNoteButton.addEventListener("click", () => addNote());

function createNoteElement(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.value = content;
    element.placeholder = "empty note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });

    element.addEventListener("dblclick", () => {
        const doDelete= confirm("are you wish to delete this note?");
        if (doDelete) {
            deleteNote(id, element);
        }
    })

    return element;
}

function addNote() {
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
    notes.push(noteObject);
    saveNotes(notes);
}

function updateNote(id, element) {
    console.log("updating note...")
    console.log(id, newContent);
}

function deleteNote(id, element) {
    saveNotes(notes);
    notesContainer.removeChild(element);
}