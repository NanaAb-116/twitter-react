import React from "react";

function TweetForm() {
  return (
    <>
      <form>
        <img
          src="/img/gQb_4vsj_400x400.jpg"
          class="tweet-feed-dp"
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
          class="tweet-field"
          placeholder="What is happening?"
        /> */}

        <div class=" iconsNbtn">
          <div class="tweet-field-icons">
            <span class="material-icons-outlined">perm_media</span>
            <span class="material-icons-outlined">gif_box</span>
            <span class="material-icons-outlined">poll</span>
            <span class="material-icons-outlined">sentiment_satisfied_alt</span>
            <span class="material-icons-outlined">schedule</span>
            <span class="material-icons-outlined">location_on</span>
          </div>
          <div class="small-tweet-btn">
            <button class="tweet-field-btn">Tweet</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TweetForm;
