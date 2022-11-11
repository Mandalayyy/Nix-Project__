import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { getItemId, removeOwnCocktail } from '../../rdx/OwnCocktails/actions';
import { cocktailIngridientSearch } from '../../services/models';


interface OwnCocktail{
    item: cocktailIngridientSearch
}


export const OwnCocktailItem = ( {item}: OwnCocktail) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const removeItem = useCallback(() => {
    dispatch(removeOwnCocktail(item.idDrink));
  },[dispatch]);
  const editItem = useCallback(() =>{
    dispatch(getItemId(item.idDrink));
    navigate('modalForm');
  },[dispatch]);
  return(
    <div className='flex flex-col w-60 p-5 h-60 bg-gray-100 rounded shadow-md space-y-2  dark:bg-[#1e1e1e]  dark:text-white'>
      <div>{item.strDrink}</div>
      <div>{item.strAlcoholic}</div>
      <div>{item.strGlass}</div>
      <div>{item.strIngredient1}</div>
      <div>{item.strInstructions}</div>
      <div className='flex justify-evenly'>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={removeItem}>Remove</button>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={editItem}>Edit</button>
      </div>
    </div>
  );
};