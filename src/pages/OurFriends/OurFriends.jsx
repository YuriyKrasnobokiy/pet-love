import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFriends,
  selectIsLoading,
} from "../../redux/our-friends/friendsSelectors";
import { fetchFriends } from "../../redux/our-friends/friendsSlice";
import Loader from "../../components/Loader/Loader";
import { FriendsList, FriendsWrapper } from "./OurFriends.styled";
import { FriendsCard } from "../../components/FriendsCard/FriendsCard";

const OurFriends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FriendsWrapper className="container">
          <h2 className="title">Our Friends</h2>
          <FriendsList>
            {friends.map((friend) => (
              <FriendsCard key={friend._id} friend={friend}></FriendsCard>
            ))}
          </FriendsList>
        </FriendsWrapper>
      )}
    </>
  );
};

export default OurFriends;
