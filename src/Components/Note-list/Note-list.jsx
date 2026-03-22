import "./Note-list.css";
import NoteItem from "./Note-item";
import { useEffect, useRef, useState } from "react";

export default function NoteList({ notes, handleEdit, handleDelete }) {
  const lastNoteRef = useRef(null);
  const isFirstRelod = useRef(true);
  const prevLengthRef = useRef(0);

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
    <div className="list-container">
      {notes.map((note, index) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={handleDelete}
            onEdit={handleEdit}
            ref={index === notes.length - 1 ? lastNoteRef : null}
          />
        );
      })}
    </div>
  );
}
