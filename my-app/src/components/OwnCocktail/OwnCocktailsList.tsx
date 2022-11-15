import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectOwnCocktailsData } from '../../rdx/OwnCocktails/selectors';
import { AddOwnCocktail } from './AddOwnCocktail';
import { OwnCocktailItem } from './OwnCocktailsItem';





export const OwnCocktailsList = ( ) => {
  const data = useSelector(selectOwnCocktailsData);
  const navigate = useNavigate()
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login') || 'false') || false);
  useEffect(() => {
    if(login != true){
      navigate('/register');
    }

  },[navigate, login]);
  return(
    <div className='flex flex-col dark:bg-[#121212] w-screen'>  
    <div className='flex flex-wrap gap-5 pt-5 px-[100px]'>
      {data.map((item) => <OwnCocktailItem  item={item} key={item.idDrink}/>)}
      <AddOwnCocktail />
      </div>    
      <Outlet/>
    </div>
  );
};