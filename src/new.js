import React from "react";

function New() {
  return (
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Twitter</title>
    //     {/* <!-- google font --> */}
    //   <link
    //     href="https://fonts.googleapis.com/icon?family=Material+Icons"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
    //     rel="stylesheet"
    //   />
    //   <!-- main css -->
    //   <link rel="stylesheet" href="style.css" />
    //   <!-- font awesome -->
    //   <script src="all.js"></script>
    // </head>

    <section>
      <div class="sec">
        <div class="left-sec">
          <section class="nav">
            <ul>
              <i class="fa-brands fa-twitter twitter-logo"></i>
              <li class="nav-links">
                <span class="material-icons-round icons"> home </span>
                <h4 style="font-weight: 600">Home</h4>
              </li>
              <li class="nav-links">
                <span class="material-icons-outlined icons"> tag </span>
                <h4>Explore</h4>
              </li>
              <li class="nav-links">
                <span class="material-icons-outlined icons">notifications</span>
                <h4>Notifications</h4>
              </li>
              <li class="nav-links">
                <span class="material-icons-outlined icons"> email </span>
                <h4>Messages</h4>
              </li>
              <li class="nav-links">
                <span class="material-icons-outlined icons"> bookmarks </span>
                <h4>Bookmarks</h4>
              </li>

              <li class="nav-links">
                <span class="material-icons-outlined icons"> sort </span>
                <h4>Lists</h4>
              </li>
              <li class="nav-links">
                <span class="material-icons-outlined icons"> person </span>
                <h4>Profile</h4>
              </li>
              <li class="nav-links">
                <span class="material-icons-outlined icons"> more_horiz </span>
                <h4>More</h4>
              </li>
              <button class="tweet-btn">Tweet</button>
              <button class="tweet-btn-round">
                <i class="quil fa-solid fa-feather"></i>
              </button>
            </ul>
          </section>
          <div class="footer-profile">
            <div class="media">
              <img
                src="/img/gQb_4vsj_400x400.jpg"
                class="tweet-feed-dp"
                alt="dp"
                height="50px"
              />
              <div>
                <h5>Grapeinemultime...</h5>
                <p>@_abonthetrack</p>
                <span class="material-icons-outlined footer-profile-more">
                  more_horiz
                </span>
              </div>
            </div>
          </div>
          <div class="small-round">
            <img
              src="/img/gQb_4vsj_400x400.jpg"
              class="tweet-feed-dp"
              alt="dp"
              height="50px"
            />
          </div>
        </div>
        <div class="main">
          <section class="main-section">
            <div class="header">
              <div>
                <img
                  src="/img/gQb_4vsj_400x400.jpg"
                  class="home-profile-img"
                  alt=""
                  width="40px"
                />
                <h3 class="home-text">Home</h3>
              </div>
              <div class="stars">
                <span class="material-icons-outlined"> auto_awesome </span>
              </div>
            </div>
            <div>
              <form>
                <img
                  src="/img/gQb_4vsj_400x400.jpg"
                  class="tweet-feed-dp"
                  alt=""
                  width="50px"
                />

                <input
                  type="text"
                  class="tweet-field"
                  placeholder="What is happening?"
                />

                <div class=" iconsNbtn">
                  <div class="tweet-field-icons">
                    <span class="material-icons-outlined">perm_media</span>
                    <span class="material-icons-outlined">gif_box</span>
                    <span class="material-icons-outlined">poll</span>
                    <span class="material-icons-outlined">
                      sentiment_satisfied_alt
                    </span>
                    <span class="material-icons-outlined">schedule</span>
                    <span class="material-icons-outlined">location_on</span>
                  </div>
                  <div class="small-tweet-btn">
                    <button class="tweet-field-btn">Tweet</button>
                  </div>
                </div>
              </form>
              <div class="show">
                <a href="#" class="show-tweets">
                  Show 232 Tweets
                </a>
              </div>
            </div>
            <div class="feed">
              <div class="tweet">
                <div class="tweet-profile ">
                  <div class="media">
                    <img
                      src="/img/facts.jpg"
                      class="tweet-feed-dp"
                      alt="dp"
                      height="50px"
                    />
                    <div class="twt">
                      <h5>
                        Fact
                        <span class="at-n-time">@Fact · 1h</span>
                      </h5>
                      <p>
                        Hitler was nominated for the Nobel Peace Prize in 1939.
                        <span class="material-icons-outlined tweet-profile-more">
                          more_horiz
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="responses">
                    <div>
                      <span class="material-icons-outlined">
                        chat_bubble_outline
                      </span>
                      <p class="response-count">3</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> repeat </span>
                      <p class="response-count">10</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">
                        favorite_border
                      </span>
                      <p class="response-count">60</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">file_download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="feed">
              <div class="tweet">
                <div class="tweet-profile ">
                  <div class="media">
                    <img
                      src="/img/facts.jpg"
                      class="tweet-feed-dp"
                      alt="dp"
                      height="50px"
                    />
                    <div class="twt">
                      <h5>
                        Fact
                        <span class="at-n-time">@Fact · 2h</span>
                      </h5>
                      <p>
                        Sarcasm makes you mentally stronger. Which is very
                        effective when dealing with emotional stress and
                        frustration.
                      </p>
                      <span class="material-icons-outlined tweet-profile-more">
                        more_horiz
                      </span>
                      <span></span>
                    </div>
                  </div>
                  <div class="responses">
                    <div>
                      <span class="material-icons-outlined">
                        chat_bubble_outline
                      </span>
                      <p class="response-count">5</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> repeat </span>
                      <p class="response-count">56</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">
                        favorite_border
                      </span>
                      <p class="response-count">245</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">file_download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="feed">
              <div class="tweet">
                <div class="tweet-profile ">
                  <div class="media">
                    <img
                      src="/img/xIrpv4WT_400x400.jpg"
                      class="tweet-feed-dp"
                      alt="dp"
                      height="50px"
                    />
                    <div class="twt">
                      <h5>
                        Big Mike
                        <span class="at-n-time">@Zeeuuss · 2h</span>
                      </h5>
                      <p>Kwan Ha be one annoying character</p>
                      <span class="material-icons-outlined tweet-profile-more">
                        more_horiz
                      </span>
                      <span></span>
                    </div>
                  </div>
                  <div class="responses">
                    <div>
                      <span class="material-icons-outlined">
                        chat_bubble_outline
                      </span>
                      <p class="response-count"></p>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> repeat </span>
                      <p class="response-count">1</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">
                        favorite_border
                      </span>
                      <p class="response-count">2</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">file_download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="feed">
              <div class="tweet">
                <div class="tweet-profile ">
                  <div class="media">
                    <img
                      src="/img/qlNbIIDT_400x400.jpg"
                      class="tweet-feed-dp"
                      alt="dp"
                      height="50px"
                    />
                    <div class="twt">
                      <h5>
                        Cheddar&Spice
                        <span class="at-n-time">@cheddarnspice · 2h</span>
                      </h5>
                      <p>
                        We miss you! So kindly flood our dms with your orders
                        for Saturday!!!!!
                      </p>
                      <img
                        src="/img/FWfBJGqXoAEqJla.jpg"
                        class="tweet-img"
                        alt="-tweet image"
                      />
                      <span class="material-icons-outlined tweet-profile-more">
                        more_horiz
                      </span>
                      <span></span>
                    </div>
                  </div>
                  <div class="responses">
                    <div>
                      <span class="material-icons-outlined">
                        chat_bubble_outline
                      </span>
                      <p class="response-count">7</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> repeat </span>
                      <p class="response-count">123</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">
                        favorite_border
                      </span>
                      <p class="response-count">342</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">file_download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="feed">
              <div class="tweet">
                <div class="tweet-profile ">
                  <div class="media">
                    <img
                      src="/img/qlNbIIDT_400x400.jpg"
                      class="tweet-feed-dp"
                      alt="dp"
                      height="50px"
                    />
                    <div class="twt">
                      <h5>
                        Deep Truth
                        <span class="at-n-time">@deeptruthh · 2h</span>
                      </h5>
                      <p>Happy 1st of July everyone!! May God bless us all ❤</p>
                      <span class="material-icons-outlined tweet-profile-more">
                        more_horiz
                      </span>
                      <span></span>
                    </div>
                  </div>
                  <div class="responses">
                    <div>
                      <span class="material-icons-outlined">
                        chat_bubble_outline
                      </span>
                      <p class="response-count">484</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> repeat </span>
                      <p class="response-count">19.9</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">
                        favorite_border
                      </span>
                      <p class="response-count">12.5</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">file_download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="feed">
              <div class="tweet">
                <div class="tweet-profile ">
                  <div class="media">
                    <img
                      src="/img/HurcnmAp_400x400.jpg"
                      class="tweet-feed-dp"
                      alt="dp"
                      height="50px"
                    />
                    <div class="twt">
                      <h5>
                        Will Bishop
                        <span class="at-n-time">@WillRBishop · 3h</span>
                      </h5>
                      <p>
                        Freddie Mercury on the right, who is the guy next to
                        him?
                      </p>
                      <img
                        src="/img/FWkc2ZHaQAEUCmV.jpg"
                        class="tweet-img"
                        alt="-tweet image"
                      />
                      <span class="material-icons-outlined tweet-profile-more">
                        more_horiz
                      </span>
                      <span></span>
                    </div>
                  </div>
                  <div class="responses">
                    <div>
                      <span class="material-icons-outlined">
                        chat_bubble_outline
                      </span>
                      <p class="response-count">9</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> repeat </span>
                      <p class="response-count">3</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">
                        favorite_border
                      </span>
                      <p class="response-count">4</p>
                    </div>
                    <div>
                      <span class="material-icons-outlined">file_download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="trends">
          <div class="search">
            <input
              type="text"
              placeholder="Search Twitter"
              class="search-twitter"
            />
            <span class="material-icons-outlined search-icon"> search </span>
          </div>
          <div class="trends-for-you">
            <h4>Trend For You</h4>
            <div class="trend-item">
              <span> Music · Trending</span>
              <h5>Kwesi Athur</h5>
              <span>2,065 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Crime drama</span>
              <h5>PowerBookIV</h5>
              <span>2,065 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Trending in Ghana</span>
              <h5>Bishop Dag Heward-Mills</h5>
              <span>2,065 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Music · Trending</span>
              <h5>Burna</h5>
              <span>19k Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Music · Trending</span>
              <h5>Kwesi Athur</h5>
              <span>2,065 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> CAF Champions League · Trending</span>
              <h5>Hearts of Oak</h5>
              <span>1,161 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Music · Trending</span>
              <h5>Sarkodie</h5>
              <span>6,006 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Travel · Trending</span>
              <h5>Zanzibar</h5>
              <span>194k Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <div class="trend-item">
              <span> Trending in Ghana</span>
              <h5>Eiii</h5>
              <span>1,882 Tweets</span>
              <span class="material-icons-outlined trend-item-more">
                more_horiz
              </span>
            </div>
            <a href="#" class="trend-show-more">
              <p>show more</p>
            </a>
          </div>
        </div>
        <nav>
          <button class="bottom-icons">
            <i class="fa-solid fa-house"></i>
          </button>
          <button class="bottom-icons">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button class="bottom-icons">
            <i class="fa-regular fa-bell"></i>
          </button>
          <button class="bottom-icons">
            <i class="fa-regular fa-envelope"></i>
          </button>
        </nav>
      </div>
    </section>
  );
}

export default New;
