import React from 'react';
import Avatar from './Avatar';
import NameWithHandle from './Name';
import Message from './Message';

const Time = () => <span className="time  mt-16">3h ago</span>;
const ReplyButton = () => (
  <i className="fa fa-reply reply-button mx-4 cursor-pointer hover:scale-125" />
);
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button mx-4 cursor-pointer hover:scale-125" />
);
const LikeButton = () => (
  <i className="fa fa-heart like-button mx-4 cursor-pointer hover:scale-125" />
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button mx-4 cursor-pointer hover:scale-125" />
);

const Tweet = () => (
  <div className="tweet">
    <div className="title flex">
      <Avatar />
      <NameWithHandle />
      <Time />
    </div>
    <div className="content">
      <Message />
      <div className="mt-3.5 mb-3.5 text-2xl from-gray-60 ml-40">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
);

export default Tweet;
