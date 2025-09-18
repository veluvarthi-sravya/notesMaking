import './index.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import NoteItem from '../notesitem'



const id = uuidv4()
console.log(id)

const Notes = () => {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [notesList, setNotesList] = useState([])



    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        console.log(title)

    }
    const onChangeNote = (event) => {
        setNote(event.target.value)

        // console.log(Note)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newNote = {
            id: uuidv4(),
            title,
            note
        }
        setNotesList((prevNotesList) => [...prevNotesList, newNote])
        setTitle("")
        setNote("")
    }
    const renderImage = () => {
        return (
            <div>
                <img src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" alt="notes empty" className="notes-image" />
                <p className="notes-description">No Notes Yet</p>
                <p className="notes-description">Notes you add will appear here</p>
            </div>
        )
    }
    const renderNotesList = () => {
  return (
    <div className="notes-grid">
      {notesList.map((eachNote) => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </div>
  );
};

    return (
        <div className="notes-container">
            <form className="note-box" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={onChangeTitle} />
                <textarea placeholder="Take a Note..." rows="3" columns="4" value={note} onChange={onChangeNote} />
                <button className="add-button" type="submit">Add</button>
            </form>
            {notesList.length === 0 ? renderImage() : renderNotesList()}
        </div>
    );
}

export default Notes;