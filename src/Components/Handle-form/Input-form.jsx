import { useState } from "react";
import "./Input-form.css";
import NoteList from "../Note-list/Note-list";

export function NoteInput() {
  const [note, setNote] = useState([]);
  const [input, setInput] = useState("");
  const [tittleInput, setTittleInput] = useState("");
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

  // const handleTitle = (e) => {
  //   e.preventDefault();
  //   setTittle(tittleInput);
  //   setNote([...note, { id: Date.now(), note: input, tittle: tittle }]);
  //   setTittleInput("");
  // };

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
