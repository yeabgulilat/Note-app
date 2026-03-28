import { useState } from "react";
import "./Input-form.css";

export function NoteInput({ onAdd }) {
  const [input, setInput] = useState("");
  const [titleInput, setTitleInput] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!input.trim() || !titleInput.trim()) return;
    onAdd((prev) => [
      ...prev,
      {
        id: Date.now(),
        note: input,
        title: titleInput,
        archived: false,
        bin: false,
      },
    ]);
    setInput("");
    setTitleInput("");
  };

  return (
    <form onSubmit={handleAddItem}>
      <div className="input-container">
        <div className="input-wrapper">
          <label>
            <input
              placeholder="Tittle"
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              className="title-area"
            />
          </label>
          <textarea
            className="note-area"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="take note"
          />
          <button className="add-btn">Add Note</button>
        </div>
      </div>
    </form>
  );
}
