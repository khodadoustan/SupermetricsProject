import React, { FC } from 'react';

interface IPostItem {
  date: string;
  text: string;
}

const PostItem: FC<IPostItem> = (props) => {
  const { date, text } = props;
  return (
    <div className='PostItemRoot'>
      <p className='PostItemDate'>{new Date(date).toLocaleString()}</p>
      <hr />
      <p className='PostItemDesc'>{text}</p>
    </div>
  );
};

export default PostItem;
