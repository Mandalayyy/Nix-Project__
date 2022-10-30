import React, { useCallback } from 'react';
import { cocktailsSearchResponse } from '../../services/models';
import {fetchSearchCocktailsIgridient} from '../../rdx/thunk';
import { useNavigate } from "react-router-dom";
import {useAppDispatch} from '../../rdx/hooks';
import { getLocalized } from '../../services/localized';

interface CocktailItemPageProps {
    item: cocktailsSearchResponse
}



export const CocktailItemPage  = ({item}: CocktailItemPageProps)  => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const getIngridients = useCallback(() => {
    dispatch(fetchSearchCocktailsIgridient(item.idDrink));
    navigate(`/cocktail/${item.idDrink}`);
  },[dispatch]);
  return( 
    <div className='flex flex-col rounded-t-lg items-start m-5 shadow-md pb-4 gap-1 dark:bg-[#1e1e1e] dark:text-white box-border'>
     
      <div ><img src={item.strDrinkThumb} className='rounded-t-lg' height='250px' width='250px' /></div>
      <div className='pl-3'>
        <div className='font-bold'>{item.strDrink}</div>
        <div>{item.strCategory}</div>
        <div>{item.strAlcoholic}</div>
        <div>{item.strGlass}</div>
      </div>
      <div className='pl-3'>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={getIngridients}>{getLocalized('moreInfoButton')}</button>
      </div>
    </div>
  );
};