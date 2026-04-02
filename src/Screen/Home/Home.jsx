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
      <div className="mt-26 grid grid-cols-[280px_1fr] gap-x-1.5">
        <div></div>
        <div>
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
      </div>
    </>
  );
}
