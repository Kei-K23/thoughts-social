import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const EditDeleteAction = ({
  index,
  text,
  textId,
  editedText,
  deleteData,
  isEditing,
  handleEdit,
  handelSaveEdit,
}) => {
  const handleDelete = async (textId) => {
    await deleteData(textId);
  };
  return (
    <div>
      {!isEditing ? (
        <button
          onClick={() => handleEdit(index, text)}
          title="Edit"
          className=" bg-sky-500 p-2 px-3 mr-4 rounded-lg transition-all hover:scale-110 hover:bg-sky-600 active:bg-sky-700 "
        >
          <EditIcon />
        </button>
      ) : (
        <button
          onClick={() => handelSaveEdit(textId, editedText)}
          title="Save"
          className=" bg-sky-500 font-medium p-2 px-3 mr-4 rounded-lg transition-all hover:scale-110 hover:bg-sky-600 active:bg-sky-700 "
        >
          save
        </button>
      )}
      <button
        onClick={() => handleDelete(textId)}
        title="Delete"
        className=" bg-red-500 p-2 px-3 mr-4 rounded-lg  transition-all hover:scale-110 hover:bg-red-600 active:bg-red-700"
      >
        <DeleteForeverIcon />
      </button>
    </div>
  );
};

export default EditDeleteAction;

EditDeleteAction.propTypes;
