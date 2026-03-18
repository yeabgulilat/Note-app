import { useState } from "react";

export default function NoteItem({ note }) {
  const [editingId, setEditingId] = useState(null);
  return (
    <div className="notes">
      <div>
        {editingId === note.id ? (
          <textarea
            type="text"
            value={note.note}
            onChange={(e) => handleEdit({ ...note, note: e.target.value })}
          />
        ) : (
          <div className="notes">
            <h3 className="tittle">
              {" "}
              <span>Tittle:</span> {note.tittle}
            </h3>
            <p>{note.note}</p>
          </div>
        )}
      </div>
      <div className="ations">
        <button onClick={() => handleDelete(note.id)} className="btn delete">
          Delete
        </button>
        <button
          className="btn edit"
          onClick={() => {
            setEditingId(editingId === note.id ? null : note.id);
          }}>
          {editingId === note.id ? "Save" : "Edit Note"}
        </button>
      </div>
    </div>
  );
}
