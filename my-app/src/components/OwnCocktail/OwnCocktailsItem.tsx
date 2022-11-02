import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../rdx/hooks';
import { showModalForm } from '../../rdx/ModalForm/actions';
import { getItemId, removeOwnCocktail } from '../../rdx/OwnCocktails/actions';
import { cocktailIngridientSearch } from '../../services/models';


interface OwnCocktail{
    item: cocktailIngridientSearch
}


export const OwnCocktailItem = ( {item}: OwnCocktail) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const removeItem = useCallback(() => {
        dispatch(removeOwnCocktail(item.idDrink));
    },[dispatch])
    const editItem = useCallback(() =>{
        dispatch(getItemId(item.idDrink));
        navigate('modalForm');
    },[dispatch]);
    return(
        <div>
            <div>{item.strDrink}</div>
            <div>{item.strAlcoholic}</div>
            <div>{item.strGlass}</div>
            <div>{item.strIngredient1}</div>
            <div>{item.strInstructions}</div>
            <div>
                <button onClick={removeItem}>Re</button>
                <button onClick={editItem}>Edit</button>
            </div>
        </div>
    )
}