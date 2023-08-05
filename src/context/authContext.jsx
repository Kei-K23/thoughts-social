import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signOutUser = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        localStorage.setItem("authUser", JSON.stringify(user)); // Convert user object to a string before saving to localStorage
      } else {
        setAuthUser(null);
        localStorage.removeItem("authUser");
      }
    });

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []); // The empty dependency array ensures the effect runs only once after the component mounts

  return (
    <AuthContext.Provider value={{ authUser, googleSignIn, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
