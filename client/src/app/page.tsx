import Users from '@/components/Users';
import { userData } from '@/components/userData';
import React from 'react';

const Home = () => {
  return (
    <>
      <div items-center>
        <h1  >Welcome!</h1> 
        <Users users={userData} /> 
      </div>
    </>
  );
}

export default Home;
