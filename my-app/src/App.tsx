import React from 'react';
import { DashboardPage } from './components/Dashboard/dashboardPage';

import './App.css';

const  App = () => {
  const theme = localStorage.getItem('theme');

  return (
    <div className='h-screen font-font' id='theme'>
      <DashboardPage />
    </div>
   
  );
};

export default App;
