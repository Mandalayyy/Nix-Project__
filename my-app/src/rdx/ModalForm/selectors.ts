import { RootState } from "../index";

export const selectIsModalFormVisable = (state: RootState) => state.modalForm.isModalFormVisable;
export const selectIEditItemId = (state: RootState) => state.modalForm.editItemId;