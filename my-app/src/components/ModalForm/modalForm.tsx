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
        
  },[]);
    
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
    <div>
      <div className='flex flex-col space-y-3'>
        <input type="text" value={strDrink} onChange={(e) => setStrDrink(e.target.value)}/>
        <input type="text" value={strAlcoholic} onChange={(e) => setStrAlcoholic(e.target.value)}/>
        <input type="text" value={strCategory} onChange={(e) => setStrCategory(e.target.value)}/>
        <input type="text" value={strGlass} onChange={(e) => setStrGlass(e.target.value)}/>
        <input type="text" value={strInstructions} onChange={(e) => setStrInstructions(e.target.value)}/>
        <input type="text" value={strIngredient1} onChange={(e) => setStrIngredient1(e.target.value)}/>
        
      </div>
      <button onClick={onCloseClick}>Close</button>
      <button onClick={onSaveClick}>save</button>
    </div>
            
  );
};