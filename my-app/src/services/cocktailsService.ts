import { cocktailIngridientSearch, cocktailIngridientSearchList, cocktailsIngridientsResponse, cocktailsResponse, cocktailsSearchResponse} from "./models";
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const cocktailsIngredientsURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const searchByIngridient = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const searchByFirstLetter = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='

export interface APIResponse<T> {
    success : boolean;
    error?: string;
    response?: T;
}

export interface APIRequest {
    path: string;
}

export const perfomRequest = async ({path}: APIRequest) => {
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
  
export const searchCocktails = async (queryString: string): Promise<APIResponse<cocktailsResponse>>  => {
  const response = await perfomRequest ({
    path: [baseUrl,queryString].join(''),
  });
  return response;
};

export const searchCocktailIngridient = async (queryString: string): Promise<APIResponse<cocktailsIngridientsResponse>> => {
  const response = await perfomRequest ({
    path: [cocktailUrl,queryString].join(''),
  });
  return response;
};

export const searchCocktailIngridientList = async (): Promise<APIResponse<cocktailIngridientSearchList>> => {
  const response = await perfomRequest ({
    path: cocktailsIngredientsURL,
  });
  return response;
};

export const searchCocktailsByIngridient= async (queryString: string): Promise<APIResponse<cocktailsResponse>> => {
  const response = await perfomRequest ({
    path: [searchByIngridient,queryString].join(''),
  });
  return response;
};

export const searchCocktailsByFirstLetter = async (queryString: string): Promise<APIResponse<cocktailsResponse>>  => {
  const response = await perfomRequest ({
    path: [baseUrl,queryString].join(''),
  });
  return response;
};