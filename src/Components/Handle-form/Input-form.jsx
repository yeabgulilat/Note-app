import { useState, useEffect } from "react";
import "./Input-form.css";
import NoteList from "../Note-list/Note-list";

export function NoteInput() {
  const [note, setNote] = useState(() => {
    const savedItem = localStorage.getItem("note");
    return savedItem ? JSON.parse(savedItem) : [];
  });

  const [input, setInput] = useState("");
  const [tittleInput, setTittleInput] = useState("");

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

  return (
    <div className="container">
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
      <NoteList note={note} setNote={setNote} />
    </div>
  );
}
