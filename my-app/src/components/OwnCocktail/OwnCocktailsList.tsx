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
    <div className='flex w-screen space-x-9 pl-[140px] dark:bg-dark h-screen'>      
      {data.map((item) => <OwnCocktailItem  item={item} key={item.idDrink}/>)}
      <AddOwnCocktail />
      <Outlet/>
    </div>
  );
};