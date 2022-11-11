import React, { useCallback } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom";
import { getItemName } from '../../rdx/Cocktails/actions';
import { selectCocktailsIngridientData } from '../../rdx/Cocktails/selectors';
import { useAppDispatch } from '../../rdx/hooks';
import {getLocalized} from '../../services/localized';


export const CocktailIngridient = () => {
  const data = useSelector(selectCocktailsIngridientData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imgSize = '-Small.png';
  const baseImgURL = 'https://www.thecocktaildb.com/images/ingredients/';
  const goHome = useCallback(() => {
    navigate('/');
  },[navigate]);
  const ingridientClick = useCallback((ingr:string) => {
    dispatch(getItemName(ingr));
    navigate(`/ing/${ingr}`);

  },[]);
  return(
    <div className='dark:bg-[#121212] h-screen dark:text-white'>
      <div className='flex flex-col items-center '>
        {data.map((item) => {
          return(
            <div key={item.idDrink} className='flex flex-col items-center'>
              <div className='mt-5'>
                <button className='rounded-lg text-black uppercase bg-blue-500 py-1 px-3 transition ease-in-out delay-120 bg-blue-500 hover: hover:scale-105 hover:bg-indigo-500 duration-500' onClick={goHome}>{getLocalized('backHome')}</button>
              </div>
              <div>
                {item.strDrink}
              </div>
              <div className='flex items-center gap-x-4 mt-10'>
                <div>
                  <img src={item.strDrinkThumb} alt={item.strDrink} className='w-[400px] h-[400px] rounded-md' />
                </div>
                <div className='flex flex-col gap-y-2 w-[600px]'>
                  <div >
                    <span className='bg-blue-200 px-2 py-1 text-green-900'>{getLocalized('cocktailsName')}</span> {item.strDrink}
                  </div>
                  <div>
                    <span className='bg-blue-200 px-2 py-1 text-green-900'>{getLocalized('cocktailsCategory')}</span> {item.strCategory}
                  </div>
                  <div>
                    <span className='bg-blue-200 px-2 py-1 text-green-900'>{getLocalized('cocktailsInfo')}</span> {item.strAlcoholic}
                  </div>
                  <div>
                    <span className='bg-blue-200 px-2 py-1 text-green-900'>{getLocalized('cocktailsGlass')}</span> {item.strGlass}
                  </div>
                  <div>
                    <span className='bg-blue-200 px-2 py-1 text-green-900'>{getLocalized('cocktailsInstructions')}</span> {item.strInstructions}
                  </div>
                  <div>
                    <span className='bg-blue-200 px-2 py-1 text-green-900'>{getLocalized('cocktailsIngridients')}</span>
                    <ul className='flex gap-3 mt-3'>
                    
                      <button onClick={() => ingridientClick(item.strIngredient1 || '')}>{item.strIngredient1? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient1,imgSize].join('')} alt="" />
                          {item.strIngredient1}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient2 || '')}>{item.strIngredient2? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient2,imgSize].join('')} alt="" />
                          {item.strIngredient2}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient3 || '')}>{item.strIngredient3? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient3,imgSize].join('')} alt="" />
                          {item.strIngredient3}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient4 || '')}>{item.strIngredient4? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient4,imgSize].join('')} alt="" />
                          {item.strIngredient4}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient5 || '')}>{item.strIngredient5? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient5,imgSize].join('')} alt="" />
                          {item.strIngredient5}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient6 || '')}>{item.strIngredient6? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient6,imgSize].join('')} alt="" />
                          {item.strIngredient6}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient7 || '')}>{item.strIngredient7? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient7,imgSize].join('')} alt="" />
                          {item.strIngredient7}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient8 || '')}>{item.strIngredient8? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient8,imgSize].join('')} alt="" />
                          {item.strIngredient8}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient9 || '')}>{item.strIngredient9? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient9,imgSize].join('')} alt="" />
                          {item.strIngredient9}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient10 || '')}>{item.strIngredient10? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient10,imgSize].join('')} alt="" />
                          {item.strIngredient10}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient11 || '')}>{item.strIngredient11? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient11,imgSize].join('')} alt="" />
                          {item.strIngredient11}
                        </li> : null}</button>
                      <button onClick={() => ingridientClick(item.strIngredient12 || '')}>{item.strIngredient12? 
                        <li>
                          <img src={[baseImgURL,item.strIngredient12,imgSize].join('')} alt="" />
                          {item.strIngredient12}
                        </li> : null}</button>
                    </ul>
                  </div>
                
                </div>
              </div>
            </div>

          );
        })}
      </div>
    </div>
    
  );
};