import React from 'react';

const Profile = ({ name, major }) => {
  const handleApply = () => {
    alert('Application submitted!');
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Major: {major}</p>
      <button onClick={handleApply}>Apply Now</button>
    </div>
  );
};

export default Profile;
