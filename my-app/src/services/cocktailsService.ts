import { cocktailsIngridientsResponse, cocktailsResponse} from "./models";
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export interface APIResponse<T> {
    success : boolean;
    error?: string;
    response?: T;
}

export interface APIRequest {
    path: string;
}

export const perfomRequest = async ({path}: APIRequest): Promise<APIResponse<cocktailsResponse | cocktailsIngridientsResponse>> => {
  try{
    const response = await fetch(path);
    if(response.ok){
      const responseJson = await response.json();
      return {success: true,response: responseJson};

    }
    return {success: false ,error : ("Something Went Wrong")};
      
  }catch(error){
    return { success: false, error: ("Something Went Wrong")};
  }
    
};
  
export const searchCocktails = async (queryString: string): Promise<APIResponse<cocktailsResponse | cocktailsIngridientsResponse>> => {
  const response = await perfomRequest ({
    path: [baseUrl,queryString].join(''),
  });
  return response;
};

export const searchCocktailIngridient = async (queryString: string): Promise<APIResponse<cocktailsResponse | cocktailsIngridientsResponse>> => {
  const response = await perfomRequest ({
    path: [cocktailUrl,queryString].join(''),
  });
  return response;
};
