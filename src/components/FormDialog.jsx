import Dialog from "@mui/material/Dialog";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
export default function FormDialog({
  open,
  handleClose,
  setData,
  handleAddData,
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <h2 className="m-4">
          <FilterDramaIcon />
          Thoughts
        </h2>
        <textarea
          onChange={(e) => setData(e.target.value)}
          name="textThoughts"
          cols="50"
          rows="3"
          autoFocus
          maxLength={150}
          aria-label="What's your thoughts?"
          placeholder="What's your thoughts?"
          className="border-2 border-black rounded-md m-4 p-3"
        ></textarea>
        <div className="flex justify-center items-center my-4">
          <button
            className="py-2 px-4 bg-red-500 text-xl text-white rounded-md hover:bg-red-600 active:bg-red-700 mr-8"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="py-2 px-4 bg-sky-500 text-xl text-white rounded-md hover:bg-sky-600 active:bg-sky-700 mr-8"
            onClick={handleAddData}
          >
            Add
          </button>
        </div>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes;
