import React from 'react'
import './post.css'
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import CachedIcon from '@mui/icons-material/Cached';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';

const Posts = ({names , userName , text , image , avatar}) => {


  return (
    <div>
      <div className="post">
          <div className="post__avatar">
            <img
              src={avatar}
              alt=""
            />
          </div>

          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {names}
                  <span className="post__headerSpecial">
              
                    {userName}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{text} </p>
                <img src={image}/>
              </div>
            </div>

            <div className="post__footer">
              <QuickreplyOutlinedIcon/>
              <CachedIcon/>
              <FavoriteBorder />
              <IosShareIcon />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Posts