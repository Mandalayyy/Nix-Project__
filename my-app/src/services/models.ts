export interface cocktailsResponse {
    drinks: Array<cocktailsSearchResponse>;
}

export interface cocktailsSearchResponse {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strGlass: string;
    strDrinkThumb: string;
}