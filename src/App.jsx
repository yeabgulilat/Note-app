import { useState, useEffect } from "react";
import { NoteInput } from "./Components/Handle-form/Input-form";
import NoteList from "./Components/Note-list/Note-list";
import NavBar from "./Components/Nav-bar/Navbar";
import Archive from "./Screen/Archive/Archive";
import N
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import SideBar from "./Components/Side-bar/Side-bar";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedItem = localStorage.getItem("notes");
    return savedItem ? JSON.parse(savedItem) : [];
  });
  const [isMenuClicked, setIsMenuClicked] = useState(true);

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
    <>
      <NavBar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        isMenuClicked={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
      />
      <div className="container">
        <SideBar isMenuClicked={isMenuClicked} />
        <div>
          <NoteInput onAdd={setNotes} />
          <NoteList
            stat={isMenuClicked}
            notes={filteredNote}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}
