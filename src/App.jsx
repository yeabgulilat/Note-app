import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router";

import Archive from "./Screen/Archive/Archive";
import Bin from "./Screen/Bin/Bin";
import Home from "./Screen/Home/Home";
import NavBar from "./Components/Nav-bar/Navbar";
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
  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((note) => note.id === id));
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
  const binedNote = filteredNote.filter((note) => note.bin);
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
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isMenuClicked={isMenuClicked}
                filteredNote={filteredNote}
                handleDelete={moveToTrash}
                handleEdit={handleEdit}
                setNotes={setNotes}
                handleArchive={handleArchive}
              />
            }
          />
          <Route
            path="/bin"
            element={
              <Bin
                recycleBin={binedNote}
                handleDelete={moveToTrash}
                removeFromBin={handleDelete}
                // handleArchive={handleArchive}
              />
            }
          />
          <Route
            path="/archive"
            element={
              <Archive
                archivedNotes={archivedNotes}
                handleDelete={handleDelete}
                handleArchive={handleArchive}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <div className="bg-blue-800 p-6 text-violet-700 font-bold flex gap-3 sm:text-left    mb-100 ">
        <div className="bg-amber-700 text-green-800  ">FROM TAILWIND CSS 1</div>
        <div className="bg-[aqua] rounded-2xl">FROM TAILWIND CSS 1</div>
        <div className="bg-green-400">FROM TAILWIND CSS 1</div>
        <div className="bg-amber-700 ">FROM TAILWIND CSS 1</div>
        <div className="bg-[aqua] ">FROM TAILWIND CSS 1</div>
        <div className="bg-green-400 rounded-e-xl ">FROM TAILWIND CSS 1</div>
      </div>
    </>
  );
}
