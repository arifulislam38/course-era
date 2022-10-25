import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from '../../Pages/Body/Body';
import Header from '../../Shared/Header/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
};

export default Main;