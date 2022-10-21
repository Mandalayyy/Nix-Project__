import { cocktailsResponse } from "./models";
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export interface APIResponse<T> {
    success : boolean;
    error?: string;
    response?: T;
}

export interface APIRequest {
    search: string;
}

export const perfomRequest = async ({search}: APIRequest): Promise<APIResponse<cocktailsResponse>> => {
  try{
    const response = await fetch([baseUrl, search].join(''));
    if(response.ok){
      const responseJson = await response.json();
      console.log(responseJson, 'response');
      return {success: true,response: responseJson};

    }
    return {success: false ,error : ("Something Went Wrong")};
      
  }catch(error){
    return { success: false, error: ("Something Went Wrong")};
  }
    
};
  
export const searchCocktails = async (queryString: string): Promise<APIResponse<cocktailsResponse>> => {
  const response = await perfomRequest ({
    search: queryString,
  });
  return response;
};
