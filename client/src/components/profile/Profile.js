import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <h1>Profile Page</h1>
      <Link to='/edit-profile'>
        <button>Edit Profile</button>
      </Link>
    </>
  );
};

export default Profile;
