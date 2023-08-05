import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuthContext } from "./authContext";
const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [authUserTextData, setAuthUserTextData] = useState([]);
  const [allUsersTextData, setAllUsersTextData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuthContext();

  const addData = async (data) => {
    const colRef = collection(db, "Thoughts-Data");
    try {
      const newData = await addDoc(colRef, data);
      console.log("Data added", newData.id);
    } catch (error) {
      console.error(error);
    }
  };

  const editData = async (textID, updateText) => {
    const colRef = collection(db, "Thoughts-Data");
    const docRef = doc(colRef, textID);
    try {
      await updateDoc(docRef, {
        text: updateText,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (textID) => {
    const colRef = collection(db, "Thoughts-Data");
    const docRef = doc(colRef, textID);
    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dataQueryForAuthUser = async () => {
      const colRef = collection(db, "Thoughts-Data");
      const dataForAuthUser = query(
        colRef,
        where("uID", "==", authUser.uid),
        orderBy("createdAt", "desc")
      );

      const unsubscribe = onSnapshot(dataForAuthUser, (snapShot) => {
        if (snapShot.size <= 0) {
          console.log("no doc");
        } else {
          const newData = snapShot.docs.map((doc) => {
            return {
              textID: doc.id,
              ...doc.data(),
            };
          });
          setLoading(false);
          setAuthUserTextData(newData);
        }
      });

      // Clean up the subscription to avoid memory leaks
      return () => unsubscribe();
    };

    if (authUser) {
      setLoading(true);
      dataQueryForAuthUser();
    }
  }, [authUser]);

  useEffect(() => {
    const dataQueryForAuthAllUser = async () => {
      const colRef = collection(db, "Thoughts-Data");
      const dataForAuthAllUser = query(colRef, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(dataForAuthAllUser, (snapShot) => {
        if (snapShot.size <= 0) {
          console.log("no doc");
        } else {
          const newData = snapShot.docs.map((doc) => {
            return {
              textID: doc.id,
              ...doc.data(),
            };
          });
          setAllUsersTextData(newData);
        }
      });

      // Clean up the subscription to avoid memory leaks
      return () => unsubscribe();
    };

    if (authUser) {
      dataQueryForAuthAllUser();
    }
  }, [authUser]);

  return (
    <DataContext.Provider
      value={{
        addData,
        editData,
        deleteData,
        loading,
        authUserTextData,
        allUsersTextData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
