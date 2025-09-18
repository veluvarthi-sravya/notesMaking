

import './index.css';

const NoteItem = ({ noteDetails }) => {
  const { title, note } = noteDetails;

  return (
    <div className="note-card">
      <h3 className="note-title">{title}</h3>
      <p className="note-content">{note}</p>
    </div>
  );
};

export default NoteItem;
