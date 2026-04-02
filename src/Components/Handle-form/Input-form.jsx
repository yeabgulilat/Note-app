import { useState } from "react";
// import "./Input-form.css";

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
        state: "",
      },
    ]);
    setInput("");
    setTitleInput("");
  };
  return (
    <form onSubmit={handleAddItem}>
      <div className="max-w-200 m-[0_auto]">
        <div className="flex flex-col w-118.75 rounded-lg shadow-[3px_9px_6px_#ccc] relative m-[18px_0] ">
          <label>
            <input
              placeholder="Tittle"
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              className="p-4 border-none outline-none font-semibold mb-0 text-[#111] text-2xl"
            />
          </label>
          <textarea
            className="p-4 border-none outline-none field-sizing-content text-[16px] mb-6 w-117 resize-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="take note"
          />
          <button className="absolute right-1.5 bottom-0.5 ">Add Note</button>
        </div>
      </div>
    </form>
  );
}
