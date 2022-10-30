export interface cocktailsResponse {
    drinks: [Array<cocktailsSearchResponse>, Array<cocktailIngridientSearch>,];
}

export interface cocktailsSearchResponse {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strGlass: string;
    strDrinkThumb: string;
}

export interface cocktailIngridientSearch {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strGlass: string;
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
    strCategory: string;
    strAlcoholic: string;
}