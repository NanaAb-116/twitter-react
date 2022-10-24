import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { setTweets, setUsers } from "./features/user/userSlice";
import { db } from "./firebase/firebaseConfig";
import Routers from "./Routers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTweet = async () => {
      const q = query(collection(db, "Tweets"), orderBy("timestamp", "desc"));
      onSnapshot(q, (querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        dispatch(setTweets(arr));
      });
    };
    const fetchUsers = async () => {
      const q = query(collection(db, "Users"));
      onSnapshot(q, (querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        dispatch(setUsers(arr));
      });
    };
    fetchTweet();
    fetchUsers();
  }, [dispatch]);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;
