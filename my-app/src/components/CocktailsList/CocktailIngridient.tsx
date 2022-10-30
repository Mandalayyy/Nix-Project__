import React, { useCallback } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom";
import { selectCocktailsIngridientData } from '../../rdx/selectors';
import {getLocalized} from '../../services/localized';


export const CocktailIngridient = () => {
  const data = useSelector(selectCocktailsIngridientData);
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate('/');
  },[navigate]);
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
                    <ul className='pl-14 list-disc'>
                    
                      {item.strIngredient1? <li>{item.strIngredient1}</li> : null}
                      {item.strIngredient2? <li>{item.strIngredient2}</li> : null}
                      {item.strIngredient3? <li>{item.strIngredient3}</li> : null}
                      {item.strIngredient4? <li>{item.strIngredient4}</li> : null}
                      {item.strIngredient5? <li>{item.strIngredient5}</li> : null}
                      {item.strIngredient6? <li>{item.strIngredient6}</li> : null}
                      {item.strIngredient7? <li>{item.strIngredient7}</li> : null}
                      {item.strIngredient8? <li>{item.strIngredient8}</li> : null}
                      {item.strIngredient9? <li>{item.strIngredient9}</li> : null}
                      {item.strIngredient10? <li>{item.strIngredient10}</li> : null}
                      {item.strIngredient11? <li>{item.strIngredient11}</li> : null}
                      {item.strIngredient12? <li>{item.strIngredient12}</li> : null}
                
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