import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectOwnCocktailsData } from '../../rdx/OwnCocktails/selectors';
import { AddOwnCocktail } from './AddOwnCocktail';
import { OwnCocktailItem } from './OwnCocktailsItem';





export const OwnCocktailsList = ( ) => {
  const data = useSelector(selectOwnCocktailsData);
  if(!data){
    return(
      <div>
                Hello
      </div>
    );
  }
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