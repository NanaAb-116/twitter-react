import React from "react";

function TweetForm() {
  return (
    <>
      <form>
        <img
          src="/img/gQb_4vsj_400x400.jpg"
          className="tweet-feed-dp"
          alt=""
          width="50px"
        />

        <textarea
          name=""
          id="tweet-field"
          placeholder="What is happening?"
          wrap="soft"
        ></textarea>

        {/*  <input
          type="text"
          className="tweet-field"
          placeholder="What is happening?"
        /> */}

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
            <button className="tweet-field-btn">Tweet</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TweetForm;
