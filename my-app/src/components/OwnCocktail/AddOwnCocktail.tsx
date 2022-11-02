import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { getItemId } from '../../rdx/OwnCocktails/actions';



export const AddOwnCocktail = () =>{
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onButtonClick = useCallback(() => {
        dispatch(getItemId(null));
       navigate('modalForm');
    },[dispatch])
    return(
        <div>
            <button onClick={onButtonClick}>
                Add
            </button>
        </div>
    )
}