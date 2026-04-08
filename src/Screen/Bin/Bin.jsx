import NoteList from "../../Components/Note-list/Note-list";

export default function Bin({ recycleBin, handleDelete, isMenuClicked }) {
  return (
    <div className={`w-fit p-10 mt-50  ${isMenuClicked ? "ml-70" : "ml-15"}`}>
      {recycleBin.length === 0 && <p>this field is empty</p>}
      <NoteList notes={recycleBin} handleDelete={handleDelete} />
    </div>
  );
}
