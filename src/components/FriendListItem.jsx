const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={`friend-item ${isOnline ? 'online' : 'offline'}`}>
      <img className="friend-avatar" src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p className="friend-status">{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
