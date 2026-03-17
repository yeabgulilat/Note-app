import { useState } from "react";
import "./Note-list.css";

const NoteList = ({ note, handleEdit, handleDelete }) => {
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      {note.map((note) => {
        return (
          <div className="notes" key={note.id}>
            <div>
              {editingId === note.id ? (
                <textarea
                  type="text"
                  value={note.note}
                  onChange={(e) =>
                    handleEdit({ ...note, note: e.target.value })
                  }
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
              <button
                onClick={() => handleDelete(note.id)}
                className="btn delete">
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
      })}
    </div>
  );
};

export default NoteList;
