export interface cocktailsResponse {
    drinks: Array<cocktailsSearchResponse>
}

export interface cocktailsIngridientsResponse {
    drinks: Array<cocktailIngridientSearch>
}

export interface cocktailIngridientSearchList {
    drinks: Array<allIngridientsList>
}

export interface allIngridientsList {
    strIngredient1: string;
}

export interface cocktailsSearchResponse {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strGlass: string;
    strDrinkThumb?: string;
}

export interface cocktailIngridientSearch extends cocktailsSearchResponse {
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strInstructions: string;
}


