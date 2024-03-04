import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuh';
import React from 'react';

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <p>HomePage</p>
      <Link to="/me">Go to Profile Page</Link>
    </>
  );
};

export default HomePage;
