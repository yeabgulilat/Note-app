import "./Note-list.css";
import NoteItem from "./Note-item";

export default function NoteList({ notes, handleEdit, handleDelete }) {
  return (
    <div>
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}
