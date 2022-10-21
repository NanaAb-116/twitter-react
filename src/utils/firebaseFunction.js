import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, auth, db } from "../firebase/firebaseConfig";

export const fetchUser = () => {
  const userInfo =
    sessionStorage.getItem("user") !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user"))
      : sessionStorage.clear();

  return userInfo;
};

export const authenticateWithGoogle = async (navigate) => {
  try {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const {
      user: { providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    sessionStorage.setItem("user", JSON.stringify(providerData[0]));
    await setDoc(
      doc(db, "Users", providerData[0].email),
      {
        userId: providerData[0].uid,
        displayName: providerData[0].displayName,
        userName: providerData[0].displayName,
        email: providerData[0].email,
        photoURL: providerData[0].photoURL,
      },
      {
        merge: true,
      }
    );
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (email, password, firstName, lastName) => {
  try {
    const {
      user: { providerData },
    } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(
      doc(db, "Users", providerData[0].email),
      {
        userId: providerData[0].uid,
        firstName: firstName,
        lastName: lastName,
        userEmail: providerData[0].email,
      },
      {
        merge: true,
      }
    );
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
};

export const loginUser = async (email, password) => {
  try {
    const {
      user: { providerData },
    } = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("user", JSON.stringify(providerData[0]));
    // return providerData[0];
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error.message);
  }
};
