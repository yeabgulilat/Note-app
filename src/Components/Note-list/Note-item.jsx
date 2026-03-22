import { useState, forwardRef } from "react";
import "./Note-item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteItem = forwardRef(({ note, onEdit, onDelete }, ref) => {
  const [editingId, setEditingId] = useState(null);
  const editArea = (
    <textarea
      type="text"
      value={note.note}
      onChange={(e) => onEdit({ ...note, note: e.target.value })}
      className="editing-text-area"
    />
  );
  return (
    <div ref={ref} className="notes">
      {editingId === note.id ? (
        editArea
      ) : (
        <div className="notes-item">
          <h3 className="tittle"> {note.title.toUpperCase()}</h3>
          <p>{note.note}</p>
        </div>
      )}
      <div className="actions">
        <button onClick={() => onDelete(note.id)} className="btn delete">
          <FontAwesomeIcon icon={["fas", "trash"]} />
          Delete
        </button>
        <button
          className="btn edit"
          onClick={() => {
            setEditingId(editingId === note.id ? null : note.id);
          }}>
          {editingId === note.id ? "Save" : "Update Note"}
        </button>
      </div>
      <div className="pin-note">
        <FontAwesomeIcon icon={["fas", "thumbtack"]} />
      </div>
    </div>
  );
});
export default NoteItem;
