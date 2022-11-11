import React,{useEffect, useState} from "react";
import {  useSelector } from "react-redux";
import { fetchIgridientsList, fetchSearchCocktails } from "../../rdx/thunk";
import { selectCocktailsData } from "../../rdx/Cocktails/selectors";
import { CocktailItemPage } from "./CocktailsItem";
import { CircularProgress, Typography} from '@mui/material';
import { selectIsDataLoading } from "../../rdx/Cocktails/selectors";
import './cocktails.css';
import { useNavigate, useSearchParams } from "react-router-dom";
import  { useAppDispatch} from "../../rdx/hooks";
import { getLocalized } from "../../services/localized";

export const CocktailsListPage = () => {
  const data = useSelector(selectCocktailsData);
  const navigate = useNavigate();
  const isListLoading = useSelector(selectIsDataLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const [login, setLogin] = useState(localStorage.getItem('login')|| 'false');
  console.log('data',data)
  const dispatch = useAppDispatch();
  const searchValue = searchParams.get('sort')|| '';  
  
  useEffect(() =>{
    dispatch(fetchSearchCocktails(searchValue));
    dispatch(fetchIgridientsList());
    if(login != 'true'){
      navigate('/register');
    }
  }, [dispatch, searchValue, login]);

  if(!data){
    return(
      <Typography  variant="h3" component="h3">
        {getLocalized('noCocktails')}
      </Typography>
    );
  }
  if(isListLoading || !data){
    return <CircularProgress color="secondary" />;
  }
  return(
    <div className="bg-gray-100  dark:bg-[#121212] ">
      <div className="flex flex-wrap gap-5 justify-center pt-5">
        {data.map((item) => <CocktailItemPage   key={item.idDrink} item={item} />)}
      </div>
    </div>
  );
};