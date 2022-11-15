import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { createOwnCocktail, editOwnCocktail } from '../../rdx/OwnCocktails/actions';
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

  console.log('eke',element)
    
  const [strDrink, setStrDrink] = useState(element? element.strDrink: '');
  const [strAlcoholic, setStrAlcoholic] = useState(element? element.strAlcoholic: 'none');
  const [strGlass, setStrGlass] = useState(element? element.strGlass: 'none');
  const [strCategory, setStrCategory] = useState(element? element.strCategory: 'none');
  const [strIngredient1, setStrIngredient1] = useState(element? element.strIngredient1: '');
  const [idDrink, setIdDrink] = useState(element? element.idDrink: uuidv4() );
  const [strInstructions,setStrInstructions] = useState(element? element.strInstructions: '');
  const [strIngredient2, setStrIngredient2] = useState(element? element.strIngredient2: '');
  const [strIngredient3, setStrIngredient3] = useState(element? element.strIngredient3: '');
  const [strIngredient4, setStrIngredient4] = useState(element? element.strIngredient4: '');
  const [strIngredient5, setStrIngredient5] = useState(element? element.strIngredient5: '');


  const onSaveClick = useCallback(() => {
    if(element){
      dispatch(editOwnCocktail({
        ...element,
        idDrink,
        strDrink,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      }));
    }else{
      dispatch(createOwnCocktail({
        idDrink,
        strDrink,
        strAlcoholic,
        strCategory,
        strGlass,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      }));
    }
    navigate('/ownCocktails');
  },[dispatch,strIngredient2,strIngredient3,strIngredient4,strIngredient5, idDrink,strDrink,strAlcoholic,strCategory,strGlass,strInstructions,strIngredient1,navigate]);


  return(
    <div className=' flex flex-col justify-center w-screen items-center h-screen absolute'>
      <div className='w-[400px] h-[600px] p-4 bg-[#6200ee] dark:bg-[#1e1e1e] ' >
      <div className='flex flex-col space-y-3 '>
        <input type="text" placeholder='Name' className='p-2' required value={strDrink} onChange={(e) => setStrDrink(e.target.value)}/>
        <select name="type" id="type" value={strAlcoholic} placeholder='Type' className='p-2' required onChange={(e) => setStrAlcoholic(e.target.value)} >
            <option value="none" disabled hidden>Choose a type </option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="No Alcoholic">No Alcoholic</option>
        </select>
        <select name="Category" id="Category"  value={strCategory} placeholder='Category' required className='p-2' onChange={(e) => setStrCategory(e.target.value)} >
            <option value="none" disabled hidden>Choose a Category</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shake">Shake</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Shot">Shot</option>
            <option value="Coffee \/ Tea">Coffee \/ Tea</option>
            <option value="Homemade Liqueur">Homemade Liqueur</option>
            <option value="Beer">Beer</option>
        </select>
        <select name="glass" id="glass" value={strGlass} placeholder='Glass' required className='p-2' onChange={(e) => setStrGlass(e.target.value)} >
            <option value="none" disabled hidden>Choose a Glass</option>
            <option value="Highball glass">Highball glass</option>
            <option value="Cocktail glass">Cocktail glass</option>
            <option value="Old-fashioned glass">Old-fashioned glass</option>
            <option value="Whiskey Glass">Whiskey Glass</option>
            <option value="Collins glass">Collins glass</option>
            <option value="Pousse cafe glass">Pousse cafe glass</option>
            <option value="Champagne flute">Champagne flute</option>
            <option value="Whiskey sour glass">Whiskey sour glass</option>
            <option value="Cordial glass">Cordial glass</option>
            <option value="Brandy snifter">Brandy snifter</option>
        </select>
        <input type="text" placeholder='Instructions' required className='p-2' value={strInstructions} onChange={(e) => setStrInstructions(e.target.value)}/>
        <input type="text" placeholder='Ingridient 1' className='p-2' value={strIngredient1} onChange={(e) => setStrIngredient1(e.target.value)}/>
        <input type="text" placeholder='Ingridient 2' className='p-2' value={strIngredient2} onChange={(e) => setStrIngredient2(e.target.value)}/>
        <input type="text" placeholder='Ingridient 3' className='p-2' value={strIngredient3} onChange={(e) => setStrIngredient3(e.target.value)}/>
        <input type="text" placeholder='Ingridient 4' className='p-2' value={strIngredient4} onChange={(e) => setStrIngredient4(e.target.value)}/>
        <input type="text" placeholder='Ingridient 5' className='p-2' value={strIngredient5} onChange={(e) => setStrIngredient5(e.target.value)}/>
      </div>
      <div className='flex justify-evenly mt-4'>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={onCloseClick}>Close</button>
        <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={onSaveClick}>save</button>
      </div>
      </div>
      
    </div>
            
  );
};