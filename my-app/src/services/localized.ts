enum UserLocale {
    EN = 'en',
    UA = 'ua',
}


interface LocalizedStringKeys {
    registerButton: string;
    alreadyRegister: string;
    registerAccount: string;
    loginPage: string;
    login: string;
    noCocktails: string;
    moreInfoButton: string;
    cocktailsName: string;
    cocktailsCategory: string;
    cocktailsInstructions: string;
    cocktailsGlass: string;
    cocktailsIngridients: string;
    cocktailsInfo: string;
    backHome: string;
}

interface LocalizedObject {
    [UserLocale.UA]: LocalizedStringKeys,
    [UserLocale.EN]: LocalizedStringKeys,
}

const localizedKeys: LocalizedObject = {
  en: {
    registerButton: 'Register',
    alreadyRegister: 'Already registered?',
    registerAccount: 'Create Account',
    loginPage: 'Log in',
    login: 'Login',
    noCocktails: 'no cocktails matched your search criteria!',
    moreInfoButton: 'More Info',
    cocktailsName: 'Name:',
    cocktailsCategory: 'Category:',
    cocktailsInstructions: 'Instructions:',
    cocktailsGlass: 'Glass:',
    cocktailsIngridients: 'Ingridients:',
    cocktailsInfo: 'Info:',
    backHome: 'Back Home',
  },
  ua :{
    registerButton: 'Зареєструватися',
    alreadyRegister: 'Вже зареєстрований?',
    registerAccount: 'Створити акаунт',
    loginPage: 'Зайти в акаунт',
    login: 'Зайти',
    noCocktails: 'Немає коктелів під цей запит!',
    moreInfoButton: 'Більше',
    cocktailsName: 'Назва:',
    cocktailsCategory: 'Категорія:',
    cocktailsInstructions: 'Інструкція:',
    cocktailsGlass: 'Стакан:',
    cocktailsIngridients: 'Інгредієнти:',
    cocktailsInfo: 'Вид:',
    backHome: 'Повернутися',
  }
};

const localeToUse = (localStorage.getItem('userLocale') || 'en') as UserLocale;

export type LocalizedString = keyof LocalizedStringKeys

export const getLocalized = (key: LocalizedString) => {
  return localizedKeys[localeToUse][key];
};