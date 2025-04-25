import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileSections from "../components/profile/ProfileSections";
import PostsSection from "../components/profile/PostsSection";
import SavedSection from "../components/profile/SavedSection";
import ProfileData from "../components/profile/ProfileData";

const Profile = () => {
  const [userData, setUserData] = useState(ProfileData);
  const [selectedSection, setSelectedSection] = useState("posts");

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <ProfileHeader userData={userData} setUserData={setUserData} />
      <ProfileSections selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      {selectedSection === "posts" ? <PostsSection posts={userData.posts} /> : <SavedSection savedPosts={userData.savedPosts} />}
    </Container>
  );
};

export default Profile;
