// import React from 'react'
import "./Archive.css";
import NoteList from "../../Components/Note-list/Note-list";
export default function Archive({
  archivedNotes,
  handleDelete,
  handleArchive,
  // archivedNotes,
}) {
  // return <div className="archive">This is from the Archive</div>;
  return (
    <div className="w-fit p-10 bg-[aqua] mt-50 ml-70">
      <NoteList
        notes={archivedNotes}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </div>
  );
}
