import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFriends,
  selectIsLoading,
} from "../../redux/our-friends/friendsSelectors";
import { fetchFriends } from "../../redux/our-friends/friendsSlice";
import Loader from "../../components/Loader/Loader";
import { FriendsTitle, FriendsWrapper } from "./OurFriends.styled";
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
        <FriendsWrapper>
          <FriendsTitle>Our Friends</FriendsTitle>
          <ul>
            {friends.map((friend) => (
              <FriendsCard key={friend._id} friend={friend}></FriendsCard>
            ))}
          </ul>
        </FriendsWrapper>
      )}
    </>
  );
};

export default OurFriends;
