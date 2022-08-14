import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "./feed.css";
import Posts from "./Posts";

const TwitterFeed = () => {
  return (
    <>
      <div className="feedSection">
        <div className="feed">
          <h2>Home </h2>
        </div>
        <div className="textTweet">
          <div class="post__avatar">
            <img
              src="https://pbs.twimg.com/media/E3SyzKAVIAsyOWi?format=jpg&name=4096x4096"
              alt=""
            />
          </div>
          <input placeholder="What's happening?" type="text" />
        </div>
        <div className="tweet">
          <div className="emoji">
            <ImageIcon />
            <GifBoxIcon style={{ margin: "0px 10px" }} />
            <PollIcon />
            <InsertEmoticonIcon style={{ margin: "0px 10px" }} />
          </div>
          <div>
            <button>Tweet</button>
          </div>
        </div>
        <div>
          <Posts
            names="Saurav"
            userName="sauravKumar__"
            text="HI my Name is Saurav"
            image="https://scontent.fdel11-3.fna.fbcdn.net/v/t39.30808-6/277793275_1782484135426697_6004267498402841392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=kQpzAdWBHHwAX_xHfKT&_nc_oc=AQmhoa77vRO7ak-dRav7mesrU23v-82OdGMIrDiE5S3epSOG5wskk1dr4-jBDdIylMw&_nc_ht=scontent.fdel11-3.fna&oh=00_AT_IAVxNIv3ngGrc_9zzCZrsW9L26rPUWQaVr1DyG_QQRQ&oe=62FD3293"
            avatar="https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-6/255649258_1681537395521372_8907954485568227546_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=4t7gywovdPAAX_Ox8MO&_nc_ht=scontent.fdel3-3.fna&oh=00_AT-b4lEhTsYzh-fkRIeAvSSA9NxsPIEanytLTaEITA4yNg&oe=62FCF1AB"
          />
          <Posts
            names="SidMalhotra"
            userName="@SidMalhotra"
            text="I've learned more in the streets than in any classroom.
          "
            image="https://pbs.twimg.com/media/FRmUiUyacAEw1ML?format=jpg&name=large"
            avatar="https://pbs.twimg.com/media/FRmUiUyacAEw1ML?format=jpg&name=large"
          />
          <Posts
            names="Saurav 2"
            userName="@sauravKumar__2"
            text="HI my Name is Saurav 2"
            image="https://pbs.twimg.com/profile_images/1530952518020534272/nwEeYprA_400x400.jpg"
            avatar="https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-6/255649258_1681537395521372_8907954485568227546_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=4t7gywovdPAAX_Ox8MO&_nc_ht=scontent.fdel3-3.fna&oh=00_AT-b4lEhTsYzh-fkRIeAvSSA9NxsPIEanytLTaEITA4yNg&oe=62FCF1AB"
          />

        </div>
      </div>
    </>
  );
};

export default TwitterFeed;
