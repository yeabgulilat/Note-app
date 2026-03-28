import { useState, forwardRef } from "react";
import "./Note-item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteItem = forwardRef(({ note, onEdit, onDelete, onArchive }, ref) => {
  const [editingId, setEditingId] = useState(null);

  const editArea = (
    <textarea
      type="text"
      value={note.note}
      onChange={(e) => onEdit({ ...note, note: e.target.value })}
      className="field-sizing-content resize-none 
       pt-2 pr-24 pb-24 pl-2 outline-0 w-full bg-white"
    />
  );
  return (
    <div
      ref={ref}
      className="bg-[#ff3] p-1.5 rounded-lg  relative flex w-[80%] pb-13 shadow-[0_2px_6px_#0000001a] ">
      {editingId === note.id ? (
        editArea
      ) : (
        <div className="w-84 shadow-[0_2px_6px_#0000001a] p-8 rounded-[10px]">
          <h3 className=""> {note.title.toUpperCase()}</h3>
          <p className="leading-[1.6]">{note.note}</p>
        </div>
      )}
      <div className="mt-2.5 absolute right-1 bottom-2">
        <button className="btn delete" onClick={() => onDelete(note.id)}>
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
      <span title="archive" className="archive-notes-container">
        <button onClick={() => onArchive(note.id)}>
          <FontAwesomeIcon icon={["fas", "trash"]} color="blue" />
        </button>
      </span>
      <div className="pin-note">
        <FontAwesomeIcon icon={["fas", "thumbtack"]} />
      </div>
    </div>
  );
});
export default NoteItem;
