import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
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
        userId: providerData[0].email,
        displayName: providerData[0].displayName,
        userName: providerData[0].displayName,
        email: providerData[0].email,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/twitter-3890d.appspot.com/o/twitter-avi-gender-balanced-figure.png?alt=media&token=c2aed808-e1f7-42f0-86dc-8430a0f464a8",
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

export const registerUser = async (email, password, fullName, userName) => {
  try {
    const {
      user: { providerData },
    } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(
      doc(db, "Users", providerData[0].email),
      {
        userId: providerData[0].uid,
        displayName: userName,
        fullName: fullName,
        email: providerData[0].email,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/twitter-3890d.appspot.com/o/twitter-avi-gender-balanced-figure.png?alt=media&token=c2aed808-e1f7-42f0-86dc-8430a0f464a8",
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
    await signInWithEmailAndPassword(auth, email, password);

    onSnapshot(doc(db, "User", email), (doc) => {
      console.log(doc.data());
      // sessionStorage.setItem("user", JSON.stringify(doc.data()));
    });
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
