import { ActionType, getType } from "typesafe-actions";
import * as Actions from './actions';


export interface ModalFormState   {
    isModalFormVisable: boolean,
    editItemId?: string | null,
}

const initialState: ModalFormState = {
  isModalFormVisable: false,
  editItemId: null,
};


export type ModalFormActions = ActionType<typeof Actions>;

export const reducer = (state: ModalFormState = initialState, action: ModalFormActions ) => {
  switch(action.type){
  case getType(Actions.showModalForm):{
    return{
      ...state,
      isModalFormVisable: true,
      editItemId: action.payload
    }
  }
  case getType(Actions.hideModalForm): {
    return{
      ...state,
      isModalFormVisable: false,
    }
  }
    
  default:
    return {
      ...state 
    };
  }
 
};