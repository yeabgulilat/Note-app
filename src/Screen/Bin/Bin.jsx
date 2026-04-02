// import React from "react";
// import "./Bin.css";
import NoteList from "../../Components/Note-list/Note-list";

export default function Bin({ recycleBin, handleDelete }) {
  // return <div className="bin">This is From the bin</div>;
  return (
    <div className={"w-fit p-10 mt-50 ml-70"}>
      {recycleBin.length === 0 && <p>this field is empty</p>}
      <NoteList notes={recycleBin} handleDelete={handleDelete} />
    </div>
  );
}
