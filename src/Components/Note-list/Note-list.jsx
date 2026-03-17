import { useState } from "react";
import "./Note-list.css";

const NoteList = ({ note, setNote }) => {
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (updatedNote) => {
    setNote((prevNote) => {
      return prevNote.map((note) =>
        updatedNote.id === note.id ? updatedNote : note,
      );
    });
  };
  const handleDelete = (id) => {
    setNote((prev) => prev.filter((note) => id !== note.id));
  };

  return (
    <div>
      {note.map((note) => {
        return (
          <div className="notes" key={note.id}>
            <div>
              {editingId === note.id ? (
                <textarea
                  type="text"
                  defaultValue={note.note}
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
