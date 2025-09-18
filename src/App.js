import NotesItem from './notesitem'
import Notes from './notes'
import './App.css'

function App() {
  return (
    <div className="App">
      <NotesItem noteDetails={{ title: "", description: "" }} />
      <Notes/>
    </div>
  )
}

export default App
