import NoteList from "../../Components/Note-list/Note-list";
export default function Archive({
  archivedNotes,
  handleDelete,
  handleArchive,
  isMenuClicked,
}) {
  return (
    <div className={`w-fit p-10 mt-50 ${isMenuClicked ? "ml-70" : "ml-15"}`}>
      {archivedNotes.length === 0 && <p>the archived fireld is empty</p>}
      <NoteList
        notes={archivedNotes}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </div>
  );
}
