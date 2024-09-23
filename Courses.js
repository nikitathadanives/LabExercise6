import React from 'react';

const Courses = () => {
  const courses = ['Math 101', 'Physics 101', 'Computer Science 101'];

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li> // Using index as key
        ))}
      </ul>
    </div>
  );
};

export default Courses;
