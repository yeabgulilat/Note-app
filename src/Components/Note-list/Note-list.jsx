import "./Note-list.css";
import NoteItem from "./Note-item";
import { useEffect, useRef } from "react";

export default function NoteList({
  // setNotes,
  notes,
  handleEdit,
  handleDelete,
  handleArchive,
}) {
  const lastNoteRef = useRef(null);
  const isFirstRelod = useRef(true);
  const prevLengthRef = useRef(0);
  // console.log("from side bar" + stat);
  useEffect(() => {
    if (isFirstRelod.current) {
      isFirstRelod.current = false;
      prevLengthRef.current = notes.length;
      return;
    }
    if (notes.length > prevLengthRef.current) {
      lastNoteRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    prevLengthRef.current = notes.length;
  }, [notes]);

  return (
    <>
      <div className="bg-blue-500 p-7.5 rounded-lg grid grid-cols-1 gap-y-4 xl:grid-cols-3 md:grid-cols-2">
        {notes.map((note, index) => {
          return (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onArchive={handleArchive}
              ref={index === notes.length - 1 ? lastNoteRef : null}
            />
          );
        })}
      </div>
    </>
  );
}
