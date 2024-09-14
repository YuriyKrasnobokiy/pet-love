import React from "react";
import { ProfileWrapper } from "./Profile.styled";
import { UserCard } from "../../components/UserCard/UserCard";
import { MyNotices } from "../../components/MyNotices/MyNotices";

const Profile = () => {
  return (
    <ProfileWrapper className="container">
      <UserCard />
      <MyNotices />
    </ProfileWrapper>
  );
};

export default Profile;
