import React,{useCallback, useEffect, useState} from "react";
import {  useSelector } from "react-redux";
import { fetchIgridientsList, fetchSearchCocktails, fetchSearchCocktailsByFirstLetter } from "../../rdx/thunk";
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
  const dispatch = useAppDispatch();
  const searchValue = searchParams.get('sort')|| '';  
  
  useEffect(() =>{
    dispatch(fetchSearchCocktails(searchValue));
    dispatch(fetchIgridientsList());
    if(login != 'true'){
      navigate('/register');
    }
  }, [dispatch, searchValue, login]);
  const browseCocktails = useCallback((value: string) => {
    dispatch(fetchSearchCocktailsByFirstLetter(value));
  },[dispatch])

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
    <div className="bg-gray-100 flex flex-col justify-between dark:bg-[#121212] ">
      <div className="flex flex-wrap gap-5 justify-center pt-5">
        {data.map((item) => <CocktailItemPage   key={item.idDrink} item={item} />)}
      </div>
      <div className='flex flex-col items-center pt-5 dark:text-white'>
        <span>Browse a cocktails</span>
        <div >
          <ul className='flex gap-2 '>
            <li className="hover:text-blue-400" ><button onClick={(e) => browseCocktails(e.currentTarget.value)} value='a'>A</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='b'>B</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='c'>C</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='d'>D</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='e'>E</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='f'>F</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='g'>G</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='h'>H</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='i'>I</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='j'>J</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='k'>K</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='l'>L</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='m'>M</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='n'>N</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='o'>O</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='p'>P</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='q'>Q</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='r'>R</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='s'>S</button></li>
            <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='t'>T</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='u'>U</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='v'>V</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='w'>W</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='x'>X</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='y'>Y</button></li>
              <span>/</span>
            <li><button className="hover:text-blue-400" onClick={(e) => browseCocktails(e.currentTarget.value)} value='z'>Z</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};