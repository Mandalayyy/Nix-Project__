import React from 'react';
import { DashboardPage } from './components/Dashboard/dashboardPage';

import './App.css';

const  App = () => {
  return (
    <div className='h-screen font-font bg-gray-100 dark:bg-[#121212] ' id='theme'>
      <DashboardPage />
    </div>
   
  );
};

export default App;
