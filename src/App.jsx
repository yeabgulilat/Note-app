import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router";

import Archive from "./Screen/Archive/Archive";
import Bin from "./Screen/Bin/Bin";
import Home from "./Screen/Home/Home";
import NavBar from "./Components/Nav-bar/Navbar";
import Reminders from "./Screen/Reminders/Reminders";
import SideBar from "./Components/Side-bar/Side-bar";

export default function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedItem = localStorage.getItem("notes");
    return savedItem ? JSON.parse(savedItem) : [];
  });
  //updating the local storage using useEffect
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // localStorage.clear();

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
  const moveToTrash = (id) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, bin: !item.bin } : item)),
    );
  };

  const handleArchive = (id) => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, archived: !item.archived } : item,
      ),
    );
  };

  const archivedNotes = filteredNote.filter(
    (note) => note.archived && !note.bin,
  );
  // const binedNote = filteredNote.filter((note) => note.bin);
  return (
    <>
      <BrowserRouter>
        <NavBar
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          setIsMenuClicked={setIsMenuClicked}
        />
        <div>
          <SideBar isMenuClicked={isMenuClicked} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isMenuClicked={isMenuClicked}
                  filteredNote={filteredNote.filter(
                    (note) => !note.bin && !note.archived,
                  )}
                  handleDelete={moveToTrash}
                  handleEdit={handleEdit}
                  s
                  setNotes={setNotes}
                  handleArchive={handleArchive}
                />
              }
            />
            <Route path="/reminders" element={<Reminders />} />
            <Route
              path="/bin"
              element={
                <Bin
                  recycleBin={filteredNote.filter((note) => note.bin)}
                  handleDelete={moveToTrash}
                  removeFromBin={moveToTrash}
                  // handleArchive={handleArchive}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <Archive
                  archivedNotes={archivedNotes}
                  handleDelete={moveToTrash}
                  handleArchive={handleArchive}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
