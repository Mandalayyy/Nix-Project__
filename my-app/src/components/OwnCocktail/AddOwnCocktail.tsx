import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { getItemId } from '../../rdx/OwnCocktails/actions';



export const AddOwnCocktail = () =>{
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onButtonClick = useCallback(() => {
    dispatch(getItemId(null));
    navigate('modalForm');
  },[dispatch]);
  return(
    <div>
      <button className=' w-60 p-5 h-60 bg-gray-100 rounded shadow-md' onClick={onButtonClick}>
                Add
      </button>
    </div>
  );
};