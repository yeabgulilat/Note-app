import { useState, forwardRef } from "react";
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
          <h3 className="text-[#111] text-[24px] font-bold mb-4.5 ">
            {" "}
            {note.title.toUpperCase()}
          </h3>
          <p className="leading-relaxed">{note.note}</p>
        </div>
      )}
      <div className="mt-2.5 absolute right-1 bottom-2">
        <button
          className="py-0.75 px-1.25 border-none rounded-sm mr-1 text-white cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-500"
          onClick={() => onDelete(note.id)}>
          <FontAwesomeIcon icon={["fas", "trash"]} />
          Delete
        </button>

        <button
          className="py-0.75 px-1.25 border-none rounded-sm mr-1 cursor-pointer  bg-[#7fff00] "
          onClick={() => {
            setEditingId(editingId === note.id ? null : note.id);
          }}>
          {editingId === note.id ? "Save" : "Update Note"}
        </button>
      </div>
      <span title="archive" className="absolute bottom-2 left-2">
        <button onClick={() => onArchive(note.id)}>
          <FontAwesomeIcon icon={["fas", "trash"]} className="text-blue-800" />
        </button>
      </span>
      <div className="p-2.5 absolute top-6 right-4.5 opacity-80 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#777]  hover:text-white active:text-black ">
        <FontAwesomeIcon icon={["fas", "thumbtack"]} />
      </div>
    </div>
  );
});
export default NoteItem;
