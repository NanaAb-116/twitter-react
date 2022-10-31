import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import Loader from "./Loader";
import { MainStyled } from "./styles/Main.styled";
import TweetForm from "./TweetForm";

function MainSec() {
  const { tweets, users, user, isLoading } = useSelector((store) => store.user);

  const getName = (id) => {
    return users.find((user) => user.userId === id);
  };

  const deleteTweet = async (userId, id) => {
    if (userId === user?.userid) {
    }
    await deleteDoc(doc(db, "Tweets", id));
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (isLoading) {
    return (
      <MainStyled>
        <div>
          <TweetForm />
        </div>
        <Loader />
      </MainStyled>
    );
  }

  return (
    <MainStyled>
      <section className="main-section">
        <div className="header">
          <div>
            <img
              src="/img/gQb_4vsj_400x400.jpg"
              className="home-profile-img"
              alt=""
              width="40px"
            />
            <h3 className="home-text">Home</h3>
          </div>
          <div className="stars">
            <span className="material-icons-outlined"> auto_awesome </span>
          </div>
        </div>
        <div>
          <TweetForm />
        </div>
        <div className="tweets">
          {tweets?.map((item) => {
            const {
              id,
              tweet,
              likes,
              retweets,
              comments,
              userId,
              images,
              timestamp,
            } = item;
            const temp = getName(userId);
            // console.log(temp);
            return (
              <div className="feed" key={id}>
                <div className="tweet">
                  <div className="tweet-profile ">
                    <div className="media">
                      <img
                        src={temp?.photoURL}
                        className="tweet-feed-dp"
                        alt=""
                        height="50px"
                      />
                      <div className="twt">
                        <h5>
                          {temp?.displayName}{" "}
                          <span className="at-n-time">
                            @{temp?.userName || temp?.displayName} ·{" "}
                            {months[timestamp?.toDate().getUTCMonth()]}{" "}
                            {timestamp?.toDate().getUTCDate()}
                          </span>
                        </h5>
                        <p>{tweet}</p>
                        {images.length > 0 ? (
                          <div className="images-container">
                            {images.map((img) => {
                              return (
                                <img
                                  key={img}
                                  src={img}
                                  className="tweet-img"
                                  alt="-tweet"
                                />
                              );
                            })}
                          </div>
                        ) : (
                          ""
                        )}
                        <span className="material-icons-outlined tweet-profile-more">
                          more_horiz
                        </span>
                        <span></span>
                      </div>
                    </div>
                    <div className="responses">
                      <div>
                        <span>
                          <i className="fa-regular fa-comment"></i>
                        </span>
                        <p className="response-count">{comments.length}</p>
                      </div>
                      <div>
                        <span>
                          <i className="fa-solid fa-retweet"></i>
                        </span>
                        <p className="response-count">{retweets.length}</p>
                      </div>
                      <div>
                        <span>
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        <p className="response-count">{likes.length}</p>
                      </div>
                      {userId === user?.userId ? (
                        <div onClick={() => deleteTweet(userId, id)}>
                          <span>
                            <i className="fa-solid fa-trash"></i>
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </MainStyled>
  );
}

export default MainSec;
