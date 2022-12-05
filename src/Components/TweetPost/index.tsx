import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
interface PostProps {
  profileName: string;
  profileUser: string;
  profileImg: string;
  description: string;
  likes: number;
  retweets: number;
  comments: number;
  time: string;
}

export const TweetPost: React.FC<{ post: PostProps }> = ({ post }) => {
  const {
    comments,
    description,
    likes,
    profileImg,
    retweets,
    time,
    profileName,
    profileUser,
  } = post;

  return (
    <div className="post d-flex row">
      <div className="col-2 profilePicture">
        <img src={profileImg} alt="Foto de Profile" width={60} height={60} />
      </div>
      <div className="col-9 tweet">
        <div className="info w-100 gap-2">
          <span className="profileName">{profileName}</span>
          <div>
            <span className="profileUser">{profileUser}</span>·
            <span className="time">{time}</span>
          </div>
          <FiMoreHorizontal size={15} color="#71767b" className="moreTweet" />
        </div>
      </div>
    </div>
  );
};
