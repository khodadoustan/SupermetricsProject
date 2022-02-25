import React, { FC } from 'react';

interface IUserItem {
  userName: string;
  count: number;
  isSelect?: boolean;
  onClick: () => void;
}

const UserItem: FC<IUserItem> = (props) => {
  const { userName, count, isSelect = false, onClick } = props;
  return (
    <div
      className={`UserItemRoot ${isSelect ? 'UserItemActive' : ''}`}
      onClick={onClick}
    >
      <h3>{userName}</h3>
      <span>{count}</span>
    </div>
  );
};

export default UserItem;
