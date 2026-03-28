import "./Note-list.css";
import NoteItem from "./Note-item";
import { useState, useEffect, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

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
      <div className="list-container">
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
