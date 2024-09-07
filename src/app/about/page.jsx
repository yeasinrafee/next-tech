import React from 'react';

export const metadata = {
  title: 'About',
  description: 'About Page of Next Tech',
};

const getTime = async () => {
  const res = await fetch('http://localhost:3000/time', { cache: 'no-store' });
  const data = await res.json();

  return data.currentTime;
};

const About = async () => {
  const currentTime = await getTime();
  return (
    <div className='p-20 text-center h-[80vh]'>
      <h1>This is About Page</h1>
      <p>Time: {currentTime}</p>
    </div>
  );
};

export default About;
