import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import EditDeleteAction from "./EditDeleteAction";
import { useDataContext } from "../context/dataContext";

export default function ItemsList({ textData }) {
  const { authUser } = useAuthContext();
  const { editData, deleteData } = useDataContext();
  const [editedText, setEditedText] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const secondToDateTime = (time, isHours) => {
    const second = time && time["seconds"];
    const timeStamp = second * 1000;
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12; // Convert 0 to 12

    const minutes = String(date.getMinutes()).padStart(2, "0");
    return isHours ? `${hours}:${minutes} ${ampm}` : `${year}-${month}-${day}`;
  };

  const handleEdit = (i, text) => {
    setEditedText(text);
    setEditingIndex(i);
  };

  const handelSaveEdit = async (id, text) => {
    editData(id, text);
    setEditingIndex(-1);
  };

  return (
    <ul className="w-11/12 md:w-10/12 m-auto mt-8">
      {textData.map((data, index) => {
        const isEditing = index === editingIndex;
        return (
          <li key={data.textID} className="bg-slate-400 rounded-md mb-8 p-4">
            <div>
              <div className="flex justify-between border-b border-slate-500 pb-4 ">
                <div className="flex items-center">
                  <img
                    className="w-10 rounded-full"
                    src={data.uProfile}
                    alt="userProfile"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-medium ">{data.uName}</h3>
                    <h3 className="text-slate-700">
                      {secondToDateTime(data.createdAt, true)}
                    </h3>
                    <h3 className="text-slate-700">
                      {secondToDateTime(data.createdAt)}
                    </h3>
                  </div>
                </div>

                {authUser.uid === data.uID && (
                  <EditDeleteAction
                    index={index}
                    isEditing={isEditing}
                    text={data.text}
                    textId={data.textID}
                    editedText={editedText}
                    deleteData={deleteData}
                    handleEdit={handleEdit}
                    handelSaveEdit={handelSaveEdit}
                  />
                )}
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  autoFocus
                  className="bg-inherit outline-none border-b-2 border-black p-2 w-full"
                />
              ) : (
                <p className="text-xl mt-2">{data.text}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

ItemsList.propTypes;
