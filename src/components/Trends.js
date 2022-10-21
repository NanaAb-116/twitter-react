import React from "react";
import { TrendsSection } from "./styles/Trends.styled";

function Trends() {
  return (
    <TrendsSection>
      <div className="search">
        <input
          type="text"
          placeholder="Search Twitter"
          className="search-twitter"
        />
        <span className="material-icons-outlined search-icon"> search </span>
      </div>
      <div className="trends-for-you">
        <h4>Trend For You</h4>
        <div className="trend-item">
          <span> Music · Trending</span>
          <h5>Kwesi Athur</h5>
          <span>2,065 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Crime drama</span>
          <h5>PowerBookIV</h5>
          <span>2,065 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Trending in Ghana</span>
          <h5>Bishop Dag Heward-Mills</h5>
          <span>2,065 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Music · Trending</span>
          <h5>Burna</h5>
          <span>19k Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Music · Trending</span>
          <h5>Kwesi Athur</h5>
          <span>2,065 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> CAF Champions League · Trending</span>
          <h5>Hearts of Oak</h5>
          <span>1,161 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Music · Trending</span>
          <h5>Sarkodie</h5>
          <span>6,006 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Travel · Trending</span>
          <h5>Zanzibar</h5>
          <span>194k Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <div className="trend-item">
          <span> Trending in Ghana</span>
          <h5>Eiii</h5>
          <span>1,882 Tweets</span>
          <span className="material-icons-outlined trend-item-more">
            more_horiz
          </span>
        </div>
        <a href="/" className="trend-show-more">
          <p>show more</p>
        </a>
      </div>
    </TrendsSection>
  );
}

export default Trends;
