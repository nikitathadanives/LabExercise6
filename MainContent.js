import React from 'react';
import Profile from './Profile';

const MainContent = () => {
  const user = {
    name: 'John Doe',
    major: 'Computer Science',
  };

  return (
    <main>
      <h2>Welcome to Our College!</h2>
      <Profile name={user.name} major={user.major} />
    </main>
  );
};

export default MainContent;
