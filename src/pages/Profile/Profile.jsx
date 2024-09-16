import React, { useEffect } from "react";
import { ProfileWrapper } from "./Profile.styled";
import { UserCard } from "../../components/UserCard/UserCard";
import { MyNotices } from "../../components/MyNotices/MyNotices";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../redux/profile/profileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);
  return (
    <ProfileWrapper className="container">
      <UserCard />
      <MyNotices />
    </ProfileWrapper>
  );
};

export default Profile;
