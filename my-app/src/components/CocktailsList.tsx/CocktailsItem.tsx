import React from 'react';
import { cocktailsSearchResponse } from '../../services/models';

interface CocktailItemPageProps {
    item: cocktailsSearchResponse
}



export const CocktailItemPage  = ({item}: CocktailItemPageProps)  => {
  return( 
    <div>
      <div><img src={item.strDrinkThumb} /></div>
      <div>{item.idDrink}</div>
      <div>{item.strCategory}</div>
      <div>{item.strAlcoholic}</div>
      <div>{item.strGlass}</div>
    </div>
  );
};