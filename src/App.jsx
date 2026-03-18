import { useState, useEffect } from "react";
import { NoteInput } from "./Components/Handle-form/Input-form";
import NoteList from "./Components/Note-list/Note-list";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedItem = localStorage.getItem("notes");
    return savedItem ? JSON.parse(savedItem) : [];
  });

  //updating the local storage using useEffect
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filteredNote = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.note.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const handleEdit = (updatedNote) => {
    setNotes((prevNote) => {
      return prevNote.map((note) =>
        updatedNote.id === note.id ? updatedNote : note,
      );
    });
  };
  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((note) => id !== note.id));
  };
  return (
    <div className="container">
      <form>
        <label>
          Search Hear &rarr;
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </form>
      <NoteInput onAdd={setNotes} />
      <NoteList
        notes={filteredNote}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
