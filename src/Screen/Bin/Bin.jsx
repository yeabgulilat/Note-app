// import React from "react";
import "./Bin.css";
import NoteList from "../../Components/Note-list/Note-list";

export default function Bin({ recycleBin, handleDelete }) {
  // return <div className="bin">This is From the bin</div>;
  return (
    <div className="bin">
      <NoteList notes={recycleBin} handleDelete={handleDelete} />
    </div>
  );
}
