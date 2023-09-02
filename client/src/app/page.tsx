import Users from '@/components/Users';
import { userData } from '@/components/userData';
import React from 'react';

const Home = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <Users users={userData} /> 
    </>
  );
}

export default Home;
