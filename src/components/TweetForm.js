import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { db } from "../firebase/firebaseConfig";

function TweetForm() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const [tweet, setTweet] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState(uuid());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === null) {
      navigate("/login");
    } else {
      try {
        await setDoc(doc(db, "Tweets", id), {
          id,
          tweet,
          ...user,
          uid: user?.id,
          likes: [],
          retweets: [],
          comments: [],
          images: [],
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
      setId(uuid());
      setTweet("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img
          src={user?.photoURL}
          className="tweet-feed-dp"
          alt=""
          width="50px"
        />

        <textarea
          name=""
          id="tweet-field"
          placeholder="What is happening?"
          wrap="soft"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        ></textarea>

        <div className=" iconsNbtn">
          <div className="tweet-field-icons">
            <span className="material-icons-outlined">perm_media</span>
            <span className="material-icons-outlined">gif_box</span>
            <span className="material-icons-outlined">poll</span>
            <span className="material-icons-outlined">
              sentiment_satisfied_alt
            </span>
            <span className="material-icons-outlined">schedule</span>
            <span className="material-icons-outlined">location_on</span>
          </div>
          <div className="small-tweet-btn">
            <button type="submit" className="tweet-field-btn">
              Tweet
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TweetForm;
