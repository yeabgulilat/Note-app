import { NoteInput } from "../../Components/Handle-form/Input-form";
import NoteList from "../../Components/Note-list/Note-list";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default function Home({
  isMenuClicked,
  filteredNote,
  handleDelete,
  handleEdit,
  setNotes,
  handleArchive,
}) {
  return (
    <>
      <div className={`mt-26 ${isMenuClicked ? "ml-17.5" : "ml-70"} `}>
        <NoteInput onAdd={setNotes} />
        <NoteList
          setNotes={setNotes}
          stat={isMenuClicked}
          notes={filteredNote}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleArchive={handleArchive}
        />
      </div>
    </>
  );
}
