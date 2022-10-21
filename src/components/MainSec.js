import React from "react";
import { MainStyled } from "./styles/Main.styled";
import TweetForm from "./TweetForm";

function MainSec() {
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
          <div className="show">
            <a href="/" className="show-tweets">
              Show 232 Tweets
            </a>
          </div>
        </div>
        <div className="feed">
          <div className="tweet">
            <div className="tweet-profile ">
              <div className="media">
                <img
                  src="/img/facts.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div className="twt">
                  <h5>
                    Fact
                    <span className="at-n-time">@Fact · 1h</span>
                  </h5>
                  <p>
                    Hitler was nominated for the Nobel Peace Prize in 1939.
                    <span className="material-icons-outlined tweet-profile-more">
                      more_horiz
                    </span>
                  </p>
                </div>
              </div>
              <div className="responses">
                <div>
                  <span className="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  <p className="response-count">3</p>
                </div>
                <div>
                  <span className="material-icons-outlined"> repeat </span>
                  <p className="response-count">10</p>
                </div>
                <div>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p className="response-count">60</p>
                </div>
                <div>
                  <span className="material-icons-outlined">file_download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="tweet">
            <div className="tweet-profile ">
              <div className="media">
                <img
                  src="/img/facts.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div className="twt">
                  <h5>
                    Fact
                    <span className="at-n-time">@Fact · 2h</span>
                  </h5>
                  <p>
                    Sarcasm makes you mentally stronger. Which is very effective
                    when dealing with emotional stress and frustration.
                  </p>
                  <span className="material-icons-outlined tweet-profile-more">
                    more_horiz
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="responses">
                <div>
                  <span className="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  <p className="response-count">5</p>
                </div>
                <div>
                  <span className="material-icons-outlined"> repeat </span>
                  <p className="response-count">56</p>
                </div>
                <div>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p className="response-count">245</p>
                </div>
                <div>
                  <span className="material-icons-outlined">file_download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="tweet">
            <div className="tweet-profile ">
              <div className="media">
                <img
                  src="/img/xIrpv4WT_400x400.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div className="twt">
                  <h5>
                    Big Mike
                    <span className="at-n-time">@Zeeuuss · 2h</span>
                  </h5>
                  <p>Kwan Ha be one annoying character</p>
                  <span className="material-icons-outlined tweet-profile-more">
                    more_horiz
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="responses">
                <div>
                  <span className="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  <p className="response-count"></p>
                </div>
                <div>
                  <span className="material-icons-outlined"> repeat </span>
                  <p className="response-count">1</p>
                </div>
                <div>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p className="response-count">2</p>
                </div>
                <div>
                  <span className="material-icons-outlined">file_download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="tweet">
            <div className="tweet-profile ">
              <div className="media">
                <img
                  src="/img/qlNbIIDT_400x400.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div className="twt">
                  <h5>
                    Cheddar&Spice
                    <span className="at-n-time">@cheddarnspice · 2h</span>
                  </h5>
                  <p>
                    We miss you! So kindly flood our dms with your orders for
                    Saturday!!!!!
                  </p>
                  <img
                    src="/img/FWfBJGqXoAEqJla.jpg"
                    className="tweet-img"
                    alt="-tweet"
                  />
                  <span className="material-icons-outlined tweet-profile-more">
                    more_horiz
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="responses">
                <div>
                  <span className="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  <p className="response-count">7</p>
                </div>
                <div>
                  <span className="material-icons-outlined"> repeat </span>
                  <p className="response-count">123</p>
                </div>
                <div>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p className="response-count">342</p>
                </div>
                <div>
                  <span className="material-icons-outlined">file_download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="tweet">
            <div className="tweet-profile ">
              <div className="media">
                <img
                  src="/img/qlNbIIDT_400x400.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div className="twt">
                  <h5>
                    Deep Truth
                    <span className="at-n-time">@deeptruthh · 2h</span>
                  </h5>
                  <p>Happy 1st of July everyone!! May God bless us all ❤</p>
                  <span className="material-icons-outlined tweet-profile-more">
                    more_horiz
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="responses">
                <div>
                  <span className="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  <p className="response-count">484</p>
                </div>
                <div>
                  <span className="material-icons-outlined"> repeat </span>
                  <p className="response-count">19.9</p>
                </div>
                <div>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p className="response-count">12.5</p>
                </div>
                <div>
                  <span className="material-icons-outlined">file_download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="tweet">
            <div className="tweet-profile ">
              <div className="media">
                <img
                  src="/img/HurcnmAp_400x400.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div className="twt">
                  <h5>
                    Will Bishop
                    <span className="at-n-time">@WillRBishop · 3h</span>
                  </h5>
                  <p>
                    Freddie Mercury on the right, who is the guy next to him?
                  </p>
                  <img
                    src="/img/FWkc2ZHaQAEUCmV.jpg"
                    className="tweet-img"
                    alt="-tweet"
                  />
                  <span className="material-icons-outlined tweet-profile-more">
                    more_horiz
                  </span>
                  <span></span>
                </div>
              </div>
              <div className="responses">
                <div>
                  <span className="material-icons-outlined">
                    chat_bubble_outline
                  </span>
                  <p className="response-count">9</p>
                </div>
                <div>
                  <span className="material-icons-outlined"> repeat </span>
                  <p className="response-count">3</p>
                </div>
                <div>
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <p className="response-count">4</p>
                </div>
                <div>
                  <span className="material-icons-outlined">file_download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainStyled>
  );
}

export default MainSec;
