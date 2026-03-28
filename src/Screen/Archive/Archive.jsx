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
    <div className="archive">
      <NoteList
        notes={archivedNotes}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </div>
  );
}
