import React, { useEffect, useState } from "react";
import { CocktailsListPage } from "../CocktailsList/CocktailsList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./navbar";
import { CocktailIngridient } from "../CocktailsList/CocktailIngridient";
import { RegisterPage } from "../Autorization/RegisterPage";
import { LoginPage } from "../Autorization/LoginPage";
import { ProfilePage } from "../Autorization/ProfilePage";
import { OwnCocktailsList } from "../OwnCocktail/OwnCocktailsList";
import { ModalForm } from "../ModalForm/modalForm";
import { AllIngridientsPage } from "../CocktailsList/AllIngridietns";
import { Footer } from "./footer";

const routes = [
  {
    path: 'profile',
    Component: ProfilePage,
  },
  {path: 'register',
  Component: RegisterPage,
 },
 {
  path: 'login',
    Component: LoginPage,
 },
 {
  path: '/',
    Component: CocktailsListPage,
 },
 {
  path: 'cocktail/:id',
    Component: CocktailIngridient,
 },
 {
  path: 'ing/:Name',
    Component: AllIngridientsPage,
 },
 {
  path: 'ownCocktails/modalForm',
    Component: ModalForm,
 },
 {
  path: 'ownCocktails',
    Component: OwnCocktailsList,
 },
];

export const DashboardPage = () => {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login') || 'false') || false);

  return (
    <div>
      <Router>
        <NavBar />
        <div id="routes" className="font-font min-h-screen bg-gray-100 flex flex-wrap justify-center pb-10 dark:bg-[#121212]">
          <Routes>
            ({routes.map(({path, Component}) => {
              return <Route path={path} key={path} element={<Component/>} />;
            })})
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    
  );
};