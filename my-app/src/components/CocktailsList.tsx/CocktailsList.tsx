/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchCocktails } from "../../rdx/thunk";
import { selectCocktailsData } from "../../rdx/selectors";
import { cocktailsActions} from "../../rdx/actions";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { CocktailsState } from "../../rdx/reducer";
import { CocktailItemPage } from "./CocktailsItem";



export const CocktailsListPage = () => {
  const data = useSelector(selectCocktailsData);
  console.log('data',data);
    
  const dispatch:ThunkDispatch<CocktailsState,undefined,cocktailsActions> = useDispatch();
  useEffect(() =>{
    dispatch(fetchSearchCocktails('b'));
  }, [dispatch]);
  return(
    <div>
      {data.map((item) => <CocktailItemPage   key={item.idDrink} item={item} />)}
    </div>
  );
};