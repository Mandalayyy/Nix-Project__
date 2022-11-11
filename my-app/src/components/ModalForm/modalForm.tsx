import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { createOwnCocktail } from '../../rdx/OwnCocktails/actions';
import { selectItemId, selectOwnCocktailsData } from '../../rdx/OwnCocktails/selectors';

export const ModalForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const itemId = useSelector(selectItemId);
  const data = useSelector(selectOwnCocktailsData);
  const onCloseClick = useCallback(() => {
    navigate('/ownCocktails');
  },[navigate]);

  const element = useMemo(() =>{
    if(!itemId){
      return null;
    }
    return data.find(e => e.idDrink === itemId);
        
  },[data, itemId]);
    
  const [strDrink, setStrDrink] = useState(element? element.strDrink: '');
  const [strAlcoholic, setStrAlcoholic] = useState(element? element.strAlcoholic: '');
  const [strGlass, setStrGlass] = useState(element? element.strGlass: '');
  const [strCategory, setStrCategory] = useState(element? element.strCategory: '');
  const [strIngredient1, setStrIngredient1] = useState(element? element.strIngredient1: '');
  const [idDrink, setIdDrink] = useState(element? element.idDrink: uuidv4() );
  const [strInstructions,setStrInstructions] = useState(element? element.strInstructions: '');


  const onSaveClick = useCallback(() => {
    dispatch(createOwnCocktail({
      idDrink,
      strDrink,
      strAlcoholic,
      strCategory,
      strGlass,
      strInstructions,
      strIngredient1
    }));
    navigate('/ownCocktails');
  },[dispatch, idDrink,strDrink,strAlcoholic,strCategory,strGlass,strInstructions,strIngredient1,navigate]);


  return(
    <div className=' flex flex-col justify-center w-screen items-center h-screen justify-center absolute'>
      <div className='w-[400px] h-[400px] p-4 bg-[#6200ee] dark:bg-[#1e1e1e] ' >
      <div className='flex flex-col space-y-3 '>
        <input type="text" placeholder='Name' className='p-2' value={strDrink} onChange={(e) => setStrDrink(e.target.value)}/>
        <input type="text" placeholder='Type' className='p-2' value={strAlcoholic} onChange={(e) => setStrAlcoholic(e.target.value)}/>
        <input type="text" placeholder='Category' className='p-2' value={strCategory} onChange={(e) => setStrCategory(e.target.value)}/>
        <input type="text" placeholder='Glass' className='p-2' value={strGlass} onChange={(e) => setStrGlass(e.target.value)}/>
        <input type="text" placeholder='Instructions' className='p-2' value={strInstructions} onChange={(e) => setStrInstructions(e.target.value)}/>
        <input type="text" placeholder='Ingridient 1' className='p-2' value={strIngredient1} onChange={(e) => setStrIngredient1(e.target.value)}/>
        
      </div>
      <div className='flex justify-evenly mt-4'>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={onCloseClick}>Close</button>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={onSaveClick}>save</button>
      </div>
      </div>
      
    </div>
            
  );
};