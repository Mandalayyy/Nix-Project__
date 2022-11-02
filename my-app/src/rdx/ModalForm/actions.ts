import { createAction } from 'typesafe-actions';
import { HIDE_MODAL_FORM, SHOW_MODAL_FORM } from './actions-type';



export const showModalForm = createAction(SHOW_MODAL_FORM)<string | null>();

export const hideModalForm  = createAction(HIDE_MODAL_FORM)();