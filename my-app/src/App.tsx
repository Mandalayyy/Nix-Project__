import React from 'react';
import { DashboardPage } from './components/Dashboard/dashboardPage';

import './App.css';

const  App = () => {
  const theme = localStorage.getItem('theme');

  return (
    <div className='h-screen w-screen font-font bg-gray-100 flex flex-wrap justify-center dark:bg-[#121212] ' id='theme'>
        <DashboardPage />
    </div>
   
  );
};

export default App;
