import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { db, storage } from "../firebase/firebaseConfig";
import Loader from "./Loader";
import UploadImages from "./UploadImages";

function TweetForm() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const [tweet, setTweet] = useState("");
  const [id, setId] = useState(uuid());
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === null) {
      navigate("/login");
    } else if (tweet !== "" || tweet !== "") {
      try {
        await setDoc(doc(db, "Tweets", id), {
          id,
          tweet,
          userId: user?.userId,
          likes: [],
          retweets: [],
          comments: [],
          images: imageUrls,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
      setId(uuid());
      setTweet("");
      setImageUrls([]);
    }
  };

  const deleteImage = (index) => {
    setIsImageLoading(true);
    const deleteRef = ref(storage, imageUrls[index]);
    deleteObject(deleteRef).then(() => {
      imageUrls.splice(index, 1);
      setIsImageLoading(false);
    });
  };

  return (
    <div className="form">
      {msg ? <p className="alert">{msg}</p> : ""}
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
          rows="2"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        ></textarea>

        {isImageLoading && imageUrls > 0 ? (
          <Loader />
        ) : (
          <div className="tweet-images">
            {imageUrls?.map((item, index) => {
              return (
                <span key={index} className="img">
                  <img src={item} alt="" />
                  <span className="close" onClick={() => deleteImage(index)}>
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </span>
              );
            })}
          </div>
        )}

        <div className=" iconsNbtn">
          <div className="tweet-field-icons">
            <UploadImages
              images={images}
              setImages={setImages}
              setImageUrls={setImageUrls}
              setIsImageLoading={setIsImageLoading}
              setMsg={setMsg}
              imageUrls={imageUrls}
            />
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
    </div>
  );
}

export default TweetForm;
