import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { createOwnCocktail, removeOwnCocktail } from '../../rdx/OwnCocktails/actions';
import { selectOwnCocktailsData } from '../../rdx/OwnCocktails/selectors';
import { ModalForm } from '../ModalForm/modalForm';
import { AddOwnCocktail } from './AddOwnCocktail';
import { OwnCocktailItem } from './OwnCocktailsItem';





export const OwnCocktailsList = ( ) => {
  const data = useSelector(selectOwnCocktailsData);
  if(!data){
    return(
      <div>
                Hello
      </div>
    )
  }
  return(
    <div className='flex w-screen space-x-9 pl-[140px] dark:bg-dark h-screen'>      
        {data.map((item) => <OwnCocktailItem  item={item} key={item.idDrink}/>)}
        <AddOwnCocktail />
        <Outlet/>
    </div>
  )
}