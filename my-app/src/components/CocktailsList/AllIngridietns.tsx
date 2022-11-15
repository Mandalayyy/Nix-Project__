import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllIngridientData, selectCocktailsByIngridientData, selectCocktailsIngridientName } from '../../rdx/Cocktails/selectors';
import { useAppDispatch } from '../../rdx/hooks';
import { fetchCocktailsByIngridient, fetchSearchCocktailsIgridient } from '../../rdx/thunk';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





export const AllIngridientsPage = () => {
  const cou = localStorage.getItem('ingCount');
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login') || 'false') || false);
  const navigate = useNavigate();
  const ingrName = useSelector(selectCocktailsIngridientName);
  console.log('ing', ingrName);
  const dispatch = useAppDispatch();
  const cocktailsByIngridientData = useSelector(selectCocktailsByIngridientData);
  const [count,setCount] = useState(1);
  localStorage.setItem('ingCount', JSON.stringify(count));
  const allData = useSelector(selectAllIngridientData);
  console.log('da',allData);
  const imgSize = '-Medium.png';
  const baseImgURL = 'https://www.thecocktaildb.com/images/ingredients/';
  const i=0;
  const imgIngrid =allData[count].strIngredient1;
  const element = useMemo(() => {
    if(!ingrName){
      return null;
    }
    let el = allData.find(e => e.strIngredient1 === ingrName);
    if(el){
      setCount(allData.indexOf(el));
    }else{
      const obj = {
        strIngredient1: ingrName
      };
      allData.push(obj);
      el = allData.find(e => e.strIngredient1 === ingrName);
      if(el){
        setCount(allData.indexOf(el));
      }
    }
    
    console.log('ekee', el);
    return el;
  },[allData, ingrName]);

  const imgURL = [baseImgURL,imgIngrid,imgSize].join(''); 



  const prevIngr = useCallback(() => {
    if(count == 0){
      setCount(allData.length - 1);
    }else{
      setCount(count - 1);
    }
  },[count, allData]);
  const nextIngr = useCallback(() => {
    if(count == allData.length - 1){
      setCount(0);
    }else{
      setCount(count + 1);
    }
  },[count, allData]);

  useEffect(() => {
    if(login != true){
      navigate('/register');
    }

    dispatch( fetchCocktailsByIngridient(allData[count].strIngredient1));
  },[dispatch, allData, count, login]);

  const ownCocktailClick = useCallback((id:string) => {
    dispatch(fetchSearchCocktailsIgridient(id));
    navigate(`/cocktail/${id}`);
  },[]);
  return(
    <div className='flex justify-center  p-5 dark:text-white'>
      <div className = 'flex-col flex items-center gap-5'>
        <div className = 'flex flex-col items-center'>
          <img src={imgURL} alt="" />
          {allData[count].strIngredient1}
        </div>
        <div className='flex'>
          <button onClick={prevIngr}><ArrowBackIcon/></button>
          <button onClick={nextIngr}><ArrowForwardIcon/></button>
        </div>
     
      </div>
      {<div className='flex flex-wrap gap-2 justify-center w-1/2 text-center '>
        {cocktailsByIngridientData.map((item) => {
          return(
            <div key={item.idDrink} className='w-[150px] h-[150px]'>
              <img className='w-[150] h-28' src={item.strDrinkThumb} alt="" />
              <button onClick={() => ownCocktailClick(item.idDrink) }>{item.strDrink}</button>
            </div>
          );
        })}
      </div> }
      
    </div>
  );
};