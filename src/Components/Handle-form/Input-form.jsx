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
      { id: Date.now(), note: input, title: titleInput },
    ]);
    setInput("");
    setTitleInput("");
  };

  return (
    <form onSubmit={handleAddItem}>
      <div>
        <label>
          title:
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
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
  );
}
