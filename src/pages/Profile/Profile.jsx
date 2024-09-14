import React from "react";
import { ProfileWrapper } from "./Profile.styled";
import { UserCard } from "../../components/UserCard/UserCard";

const Profile = () => {
  return (
    <ProfileWrapper className="container">
      <UserCard></UserCard>
    </ProfileWrapper>
  );
};

export default Profile;
