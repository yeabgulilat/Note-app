import { useState, useEffect } from "react";
import "./Input-form.css";
import NoteList from "../Note-list/Note-list";
import SearchField from "../Handle-search/Handle-search";

export function NoteInput() {
  const [note, setNote] = useState(() => {
    const savedItem = localStorage.getItem("note");
    return savedItem ? JSON.parse(savedItem) : [];
  });

  const [input, setInput] = useState("");
  const [tittleInput, setTittleInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNote = note.filter(
    (note) =>
      note.tittle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.note.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  //updating the localStorage using use Effect.
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (input.trim() === "" && tittleInput.trim() === "") return;
    setNote((prev) => [
      ...prev,
      { id: Date.now(), note: input, tittle: tittleInput },
    ]);
    setInput("");
    setTittleInput("");
  };
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
    <div className="container">
      {/* <SearchField note={note} /> */}
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            type="text"
            placeholder="Search note..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          {/* <button type="submit">Search</button> */}
        </form>
      </div>
      <form onSubmit={handleAddItem}>
        <div>
          <label>
            tittle:
            <input
              type="text"
              value={tittleInput}
              onChange={(e) => setTittleInput(e.target.value)}
            />
          </label>
          <br />
          <textarea
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Add Note</button>
        </div>
      </form>
      <NoteList
        note={filteredNote}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
